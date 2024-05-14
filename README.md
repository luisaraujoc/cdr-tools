Olá, esse é o CDR Tools

Uma aplicação piloto feita para o CDR Diagnósticos de Eunápolis - BA com a intenção de facilitar a usabilidades dos formulários de anamnese feitos pelos funcionários com os pacientes. Para maior adequação do projeto ao ambiente, vamos disponibilizar um guia rápido dos que precisa para rodar o projeto normalmente.

## Requisito principal

- [Node.js](https://nodejs.org/en/)
    - O node vai ser usando em ambos lados da aplicação. A pasta `private` se trata da aplicação backend, e a pasta `public` e as demais são referentes ao frontend/client-side. É interessante que você tenha o node instalado para rodar o projeto e que antes de qualquer coisa, inicialize o projeto em ambas as partes com `npm install` ou `npm i` para instalar as dependências necessárias.

## Inicializando o projeto

- Para inicialização do projeto, o front-end pode ser inicializado como uma pagina HTML normal, mostrada pelo IIS ou a forma de sua preferência. Já o backend, você precisa rodar com o node referenciado e ele vai executar o comando `node ./src/index.js` para rodar o servidor (lembrando que esse caminho se refere a raiz da pasta private).
O servidor, por padrão, inicializa como `http://localhost:3000` para máquinas locais, as devidas configurações do front-end devem ser feitas para que ele envie as requisições para o servidor corretamente.

## Contatos e suporte

- Para qualquer dúvida ou suporte, entre em contato comigo pelo e-mail <!-- mail to --> [luislk_@outlook.com](mailto:luislk_@outlook.com) ou []().

## Agradecimentos

Agradecemos principalmente ao CDR Diagnósticos por nos dar a oportunidade de desenvolver esse projeto, ao Gefferson por intermedia essa parceira e a dupla responsável por desenvolver o projeto, Luis Henrique Couto e Lucas Edurdo Da Silva, que se dedicaram para que o projeto fosse entregue com a melhor qualidade possível. O período de desenvolvimento foi de grande proveito para absorver e aplicar conhecimentos, e esperamos que o projeto seja de grande utilidade para a empresa. Além claro, de esperar que o mesmo continue sendo desenvolvido e melhorado para que possa atender as necessidades da empresa.