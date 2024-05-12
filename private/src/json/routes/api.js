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

app.post('/hitoricoEnfermagem/enviar', (req, res) => {
  const informacaoRecebida = req.body.html;
    let dataAtual = new Date();
    const hora = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

    pdf.create(informacaoRecebida, {}).toFile(`temp/historico_enfermagem_${hora}-${minutos}-${segundos}.pdf`,(err, res)=>{
        if(err){
            console.log(`Deu erro ${err}`)
        }else{
          console.log(res)
        }
    })  
  res.send({boo: true});
});


app.post('/addMedico/enviar', (req, res) => {
    const data = req.body;
    //JSON to string - JSON.parse(...)
    // String to JSON - JSON.stringify(...)
    const directory = path.join(__dirname, 'json');
    
    const filePath = path.join(directory, 'medicos.json');

    if (!fs.existsSync(directory)){
        fs.mkdirSync(directory);
    }

    fs.readFile(filePath, 'utf8', (err, dataJson) => {
        if (err && err.code !== 'ENOENT') {
          console.error('Erro ao ler o arquivo:', err);
          res.send({boo: false});
          return;
        }
        
        let jsonData = [];
        if(dataJson) {
            jsonData = JSON.parse(dataJson);
            // Verifica se jsonData é um array, caso contrário, cria um array vazio
            if(!Array.isArray(jsonData)) {
              jsonData = [];
            }
        }
    
        // Adicionando novos dados
        jsonData.push(data);
    
        // Escrevendo os dados no arquivo JSON externo
        fs.writeFile(filePath, JSON.stringify(jsonData), 'utf8', (err) => {
            if (err) {
                console.error('Erro ao escrever no arquivo:', err);
                res.send({boo: false});
                return;
            }
            console.log('Arquivo JSON atualizado com sucesso em:', filePath);
            res.send({boo: true});
        });
    });
});







app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});



