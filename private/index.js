const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

let pdf = require("html-pdf");

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());


app.get('/api/', (req, res) => {
  res.send('End point teste');
});


function generateFileName(data, dadosNomePdf) {

  let nome = ""
  console.log(dadosNomePdf)

  for (let i = 0; i < 4; i++) {
    switch (data[0].pattern[i]) {
      case 1:
        nome += `_${dadosNomePdf.nomePaciente}`
        break;
      case 2:
        nome += `_${dadosNomePdf.medicoSolicitante}`
        break;
      case 3:
        nome += `_${dadosNomePdf.exame}`
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

function verifyPassword(password) {
  const directory = path.join(__dirname, 'json');

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
  const passwordFile = path.join(__dirname, 'json', 'password.json');
  return new Promise((resolve, reject) => {
    fs.readFile(passwordFile, 'utf8', (err, dataJsonPass) => {
      if (err && err.code !== 'ENOENT') {
        console.error('Erro ao ler o arquivo:', err);
        res.status(500).send({ boo: false });
        return;
      }

      let jsonData = [];
      if (dataJsonPass) {
        jsonData = JSON.parse(dataJsonPass);
      }

      if (jsonData[0].password == password) {
        return resolve(true)
      } else {
        return resolve(false)
      }
    });
  });
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

    const pdfPath = path.join('C:', 'Temp', 'PDF', 'AnamneseHEM', `${generateFileName(dataPadrao, dadosNameConvert)}.pdf`);

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

app.post('/api/tomografia/enviar', (req, res) => {
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

    const pdfPath = path.join('C:', 'Temp', 'PDF', 'AnamneseTC', `${generateFileName(dataPadrao, dadosNameConvert)}.pdf`);

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


app.post('/api/addMedico/enviar', async (req, res) => {
  const data = req.body;
  const directory = path.join(__dirname, 'json');
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
  const filePath = path.join(directory, 'medicos.json');
  try {

    const isPasswordCorrect = await verifyPassword(data.senha);

    if (isPasswordCorrect) {

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
    } else {
      console.log("Erro ao adicionar médico, senha incorreta")
      res.status(500).send({ boo: false, mes: "Senha incorreta" });
    }
  } catch (error) {

  }
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

app.get('/api/padraoArqName', (req, res) => {
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

    let jsonData = {};
    if (dataJson) {
      jsonData = JSON.parse(dataJson);
    }

    res.send(jsonData);

  })
});

app.put('/api/editarMedico/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  const senha = req.body.senha;
  const directory = path.join(__dirname, 'json');
  const filePath = path.join(directory, 'medicos.json');
  try {
    const isPasswordCorrect = await verifyPassword(senha);
    if (isPasswordCorrect) {
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
    } else {
      console.log("Erro ao editar médico, senha incorreta")
      res.status(500).send({ boo: false, mes: "Senha incorreta" });
    }
  } catch (error) {
    console.error(error)
    res.status(500).send({ boo: false, mes: "Erro ao editar médico" });
  }
});

app.delete('/api/excluirMedico/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const senha = req.body.senha;
  const directory = path.join(__dirname, 'json');
  const filePath = path.join(directory, 'medicos.json');
  try {

    const isPasswordCorrect = await verifyPassword(senha);
    if (isPasswordCorrect) {
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
    } else {
      console.log("Erro ao excluir médico, senha incorreta")
      res.send({ boo: false, mes: "Senha incorreta" });
    }
  } catch (error) {

  }
});

// Novo endpoint para salvar o padrão de nome de arquivo
app.post('/api/salvar-padrao', async (req, res) => {
  const pattern = req.body.pattern;
  const passReq = req.body.senha
  const filePath = path.join(__dirname, 'json', 'filenamePattern.json');

  const directory = path.join(__dirname, 'json');

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }


  try {
    const isPasswordCorrect = await verifyPassword(passReq)

    if (isPasswordCorrect) {
      fs.writeFile(filePath, JSON.stringify([{ pattern }]), 'utf8', (err) => {
        if (err) {
          console.error('Erro ao salvar o padrão de nome:', err);
          res.status(500).send({ boo: false, mes: "Erro ao salvar o padrão de nome" });
          return;
        }
        console.log('Padrão de nome salvo com sucesso em:', filePath);
        res.send({ boo: true, mes: "Padrão de nome salvo com sucesso" });
      });
    } else {
      console.log("Erro ao alterar padrão, senha incorreta")
      res.status(500).send({ boo: false, mes: "Senha incorreta" });
    }
  } catch (error) {
    console.error(error)
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
