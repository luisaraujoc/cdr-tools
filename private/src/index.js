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

app.post('/api/hitoricoEnfermagem/enviar', (req, res) => {
  const informacaoRecebida = req.body.html;
  let dataAtual = new Date();
  const hora = dataAtual.getHours();
  const minutos = dataAtual.getMinutes();
  const segundos = dataAtual.getSeconds();

  pdf.create(informacaoRecebida, {}).toFile(`temp/historico_enfermagem_${hora}-${minutos}-${segundos}.pdf`, (err, res) => {
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

    // Verifica se o CRM já existe no array jsonData
    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].crm === data.crm) {
        console.log('CRM já existe:', data.crm);
        res.send({boo: false,  mes: "CRM ja existe no sistema"});
        return;
      }
    }

    // Se o CRM não existir no array, adiciona o novo médico
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



app.get('/api/listMedicos', (req, res) => {

  const directory = path.join(__dirname, 'json');

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  const filePath = path.join(directory, 'medicos.json');


  fs.readFile(filePath, 'utf8', (err, dataJson) => {
    if (err && err.code !== 'ENOENT') {
      console.error('Erro ao ler o arquivo:', err);
      res.send({ boo: false });
      return;
    }

  
    let jsonData = {};
    if (dataJson) {
      jsonData = JSON.parse(dataJson);
    }

    res.send(jsonData);
    
  });
})







app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});



