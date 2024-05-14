const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

let pdf = require("html-pdf");

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());


function generateFileName(data, dadosNomePdf){

  let nome = "historicoenfermagem"
  console.log(dadosNomePdf)

  for(let i = 0; i < 4; i++){
    switch(data.pattern[i]){
      case 1:
        nome += `_${dadosNomePdf.nomePaciente}`
        break;
      case 2:
        nome += `_${dadosNomePdf.medicoSolicitante}`
        break;
      case 3:
        nome +=`_${dadosNomePdf.exame}`
        break;
      case 4:
        nome += `_${dadosNomePdf.dataExame}`
        break;
      default:
        console.log("a")
      break;
    }
  }

  return nome;

}



app.post('/api/hitoricoEnfermagem/enviar', (req, res) => {
  const informacaoRecebida = req.body.html;
  const dadosNamePdf = req.body.filename;
  let dadosNameConvert = JSON.parse(dadosNamePdf)
  
  const directory = path.join(__dirname, 'json');

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
  const filePath = path.join(directory, 'filenamePattern.json');
  fs.readFile(filePath, 'utf8', (err, dataJson) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      res.status(500).send({ boo: false, mes: "Erro ao ler arquivo JSON" });
      return;
    }

    const dataPadrao = JSON.parse(dataJson)    

    const pdfPath = path.join('C:', 'Temp', 'PDF', `${generateFileName(dataPadrao, dadosNameConvert)}.pdf`);

    pdf.create(informacaoRecebida, {}).toFile(pdfPath, (err, result) => {
        if (err) {
            console.error(`Erro ao gerar PDF: ${err}`);
            return res.status(500).send({ error: 'Erro ao gerar PDF' });
        } else {
            console.log(result);
            res.send({ boo: true, pdfPath });
        }
    });    
  });
});


app.post('/api/addMedico/enviar', (req, res) => {
  const data = req.body;
  const directory = path.join(__dirname, 'json');
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
  const filePath = path.join(directory, 'medicos.json');

  fs.readFile(filePath, 'utf8', (err, dataJson) => {
    if (err && err.code !== 'ENOENT') {
      console.error('Erro ao ler o arquivo:', err);
      res.send({ boo: false, mes: "Erro ao ler arquivo JSON" });
      return;
    }

    let jsonData = [];
    if (dataJson) {
      jsonData = JSON.parse(dataJson);
      if (!Array.isArray(jsonData)) {
        jsonData = [];
      }
    }

    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].crm === data.crm) {
        console.log('CRM já existe:', data.crm);
        res.send({ boo: false, mes: "CRM já existe no sistema" });
        return;
      }
    }

    jsonData.push(data);

    fs.writeFile(filePath, JSON.stringify(jsonData), 'utf8', (err) => {
      if (err) {
        console.error('Erro ao escrever no arquivo:', err);
        res.send({ boo: false, mes: "Erro ao escrever no arquivo" });
        return;
      }
      console.log('Arquivo JSON atualizado com sucesso em:', filePath);
      res.send({ boo: true, mes: "Sucesso" });
    });
  });
});

app.get('/api/listMedicos', (req, res) => {
  const directory = path.join(__dirname, 'json');

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  const filePath = path.join(directory, 'medicos.json');

  fs.readFile(filePath, 'utf8', (err, dataJson) => {
    if (err && err.code !== 'ENOENT') {
      console.error('Erro ao ler o arquivo:', err);
      res.status(500).send({ boo: false });
      return;
    }

    let jsonData = {};
    if (dataJson) {
      jsonData = JSON.parse(dataJson);
    }

    res.send(jsonData);
  });
});

app.put('/api/editarMedico/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  const directory = path.join(__dirname, 'json');
  const filePath = path.join(directory, 'medicos.json');

  fs.readFile(filePath, 'utf8', (err, dataJson) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      res.status(500).send({ boo: false, mes: "Erro ao ler arquivo JSON" });
      return;
    }

    let jsonData = [];
    if (dataJson) {
      jsonData = JSON.parse(dataJson);
      if (!Array.isArray(jsonData)) {
        jsonData = [];
      }
    }

    const index = jsonData.findIndex(medico => medico.id === id);
    if (index === -1) {
      res.status(404).send({ boo: false, mes: "Médico não encontrado" });
      return;
    }

    jsonData[index] = { ...jsonData[index], ...data };

    fs.writeFile(filePath, JSON.stringify(jsonData), 'utf8', (err) => {
      if (err) {
        console.error('Erro ao escrever no arquivo:', err);
        res.status(500).send({ boo: false, mes: "Erro ao escrever no arquivo" });
        return;
      }
      console.log('Arquivo JSON atualizado com sucesso em:', filePath);
      res.send({ boo: true, mes: "Sucesso" });
    });
  });
});

app.delete('/api/excluirMedico/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const directory = path.join(__dirname, 'json');
  const filePath = path.join(directory, 'medicos.json');

  fs.readFile(filePath, 'utf8', (err, dataJson) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      res.status(500).send({ boo: false, mes: "Erro ao ler arquivo JSON" });
      return;
    }

    let jsonData = [];
    if (dataJson) {
      jsonData = JSON.parse(dataJson);
      if (!Array.isArray(jsonData)) {
        jsonData = [];
      }
    }

    const index = jsonData.findIndex(medico => medico.id === id);
    if (index === -1) {
      res.status(404).send({ boo: false, mes: "Médico não encontrado" });
      return;
    }

    jsonData.splice(index, 1);

    fs.writeFile(filePath, JSON.stringify(jsonData), 'utf8', (err) => {
      if (err) {
        console.error('Erro ao escrever no arquivo:', err);
        res.status(500).send({ boo: false, mes: "Erro ao escrever no arquivo" });
        return;
      }
      console.log('Arquivo JSON atualizado com sucesso em:', filePath);
      res.send({ boo: true, mes: "Sucesso" });
    });
  });
});

// Novo endpoint para salvar o padrão de nome de arquivo
app.post('/api/salvar-padrao', (req, res) => {
  const pattern = req.body.pattern;
  const filePath = path.join(__dirname, 'json', 'filenamePattern.json');

  fs.writeFile(filePath, JSON.stringify({ pattern }), 'utf8', (err) => {
    if (err) {
      console.error('Erro ao salvar o padrão de nome:', err);
      res.status(500).send({ boo: false, mes: "Erro ao salvar o padrão de nome" });
      return;
    }
    console.log('Padrão de nome salvo com sucesso em:', filePath);
    res.send({ boo: true, mes: "Padrão de nome salvo com sucesso" });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
