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

// Função para ler o último ID usado
function readLastUsedId(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, dataJson) => {
    if (err && err.code === 'ENOENT') {
      // Se o arquivo não existe, significa que nenhum médico foi adicionado ainda
      callback(0); // Retorna ID 0
    } else if (err) {
      console.error('Erro ao ler o arquivo:', err);
      callback(null);
    } else {
      let jsonData = JSON.parse(dataJson);
      if (!Array.isArray(jsonData) || jsonData.length === 0) {
        callback(0); // Se o arquivo estiver vazio ou não contiver um array válido, retorna ID 0
      } else {
        // Encontra o maior ID existente
        const lastUsedId = jsonData.reduce((maxId, item) => Math.max(maxId, item.id), 0);
        callback(lastUsedId);
      }
    }
  });
}



app.post('/api/hitoricoEnfermagem/enviar', (req, res) => {
  const informacaoRecebida = req.body.html;
  let dataAtual = new Date();
  const hora = dataAtual.getHours();
  const minutos = dataAtual.getMinutes();
  const segundos = dataAtual.getSeconds();
  const path = (`C:`,`Temp`, `PDF`, `historico_enfermagem_${hora}-${minutos}-${segundos}.pdf`)

  pdf.create(informacaoRecebida, {}).toFile(path, (err, res) => {
    if (err) {
      console.log(`Deu erro ${err}`)
    } else {
      console.log(res)
    }
  })
  res.send({ boo: true });
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
        res.send({boo: false,  mes: "CRM ja existe no sistema"});
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
      res.send({ boo: true, mes: "Sucesso"});
    });
  });
});


app.get('/api/listMedicos', (req, res) => { // Alterado o nome do parâmetro para req
  const directory = path.join(__dirname, 'json');

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  const filePath = path.join(directory, 'medicos.json');

  fs.readFile(filePath, 'utf8', (err, dataJson) => {
    if (err && err.code !== 'ENOENT') {
      console.error('Erro ao ler o arquivo:', err);
      res.status(500).send({ boo: false }); // Alterada a resposta para lidar com erro
      return;
    }

    let jsonData = {};
    if (dataJson) {
      jsonData = JSON.parse(dataJson);
    }

    res.send(jsonData);
  });
})

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

    // Atualiza os dados do médico
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

    // Remove o médico do array
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


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});