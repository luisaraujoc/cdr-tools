const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let pdf = require("html-pdf");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/enviar', (req, res) => {
  const informacaoRecebida = req.body.html;
    console.log(`recebido: ${informacaoRecebida}`)
    let dataAtual = new Date();
    const hora = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

    pdf.create(informacaoRecebida, {}).toFile(`C:/temp/historico_enfermagem_${hora}-${minutos}-${segundos}.pdf`,(err, res)=>{
        if(err){
            console.log(`Deu erro ${err}`)
        }else{
            console.log(res)
        }
    })
  
  res.send([{info: 'Informação recebida com sucesso!', boo: true}]);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});



