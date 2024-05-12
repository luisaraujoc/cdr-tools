const fs = require('fs');
const path = require('path');

// Dados a serem escritos no arquivo JSON
const data = {
  nome: 'Ailla',
  idade: 25,
  cidade: 'paris'
};

// Diretório onde queremos salvar o arquivo JSON
const directory = path.join(__dirname, 'json');

// Caminho completo para o arquivo JSON
const filePath = path.join(directory, 'teste.json');

// Verificando se o diretório existe, se não, criando o diretório
if (!fs.existsSync(directory)){
    fs.mkdirSync(directory);
}

// Lendo os dados do arquivo JSON
fs.readFile(filePath, 'utf8', (err, dataJson) => {
    if (err && err.code !== 'ENOENT') {
      console.error('Erro ao ler o arquivo:', err);
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
            return;
        }
        console.log('Arquivo JSON atualizado com sucesso em:', filePath);
    });
});
