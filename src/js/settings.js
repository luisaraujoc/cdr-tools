// Constantes para seletores frequentemente utilizados
const configIcon = document.getElementById("configIcon");
const configModal = document.getElementById("configModal");

// Função para exibir o modal
function showConfigModal() {
    configModal.classList.add("show", "d-block");
    configModal.setAttribute("aria-modal", "true");
    configModal.focus();
}

// Função para ocultar o modal
function hideConfigModal() {
    configModal.classList.remove("show", "d-block");
    configModal.setAttribute("aria-modal", "false");
}

// Adiciona um ouvinte de evento de clique ao ícone de configuração
configIcon.addEventListener("click", function () {
    showConfigModal();
});

// Adiciona um ouvinte de evento de clique ao botão fechar do modal
configModal.querySelector(".btn-close").addEventListener("click", function () {
    hideConfigModal();
});

// Adiciona um ouvinte de evento de clique ao botão salvar do modal
configModal.querySelector("#saveButton").addEventListener("click", function () {
    // Adicione aqui a lógica para salvar as configurações
    hideConfigModal();
});


// drag and drop para parametrização dos nomes dos arquivos
// apenas pega a ordem dos elementos e manda para arquivo de configuração do backend
document.addEventListener("DOMContentLoaded", function() {
  const availableOptions = document.getElementById("availableOptions");
  const selectedOptions = document.getElementById("selectedOptions");

  // Adicionar evento de clique às opções disponíveis
  availableOptions.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
          const option = event.target;
          moveOption(option, availableOptions, selectedOptions);
      }
  });

  // Adicionar evento de clique às opções selecionadas
  selectedOptions.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
          const option = event.target;
          moveOption(option, selectedOptions, availableOptions);
      }
  });

  // Função para mover a opção entre as listas
  function moveOption(option, fromList, toList) {
      option.remove(); // Remover a opção da lista atual
      toList.appendChild(option); // Adicionar a opção à nova lista
  }

  // Vincular evento de clique ao botão "Salvar"
  const saveButton = document.getElementById("saveButton");
  saveButton.addEventListener("click", savePattern);

  // Função para salvar o padrão de nome
  function savePattern() {
      const selectedOptionItems = selectedOptions.querySelectorAll("li");
      const pattern = Array.from(selectedOptionItems).map(option => option.dataset.value).join("-");
      const filenamePattern = pattern + ".arquivo";
      document.getElementById("filenamePattern").innerText = filenamePattern;

      // Enviar o padrão de nome para o servidor Node.js via fetch API
      fetch("http://seu-servidor-nodejs.com/salvar-padrao", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ pattern: filenamePattern }),
      })
      .then((response) => {
          if (!response.ok) {
              throw new Error("Erro ao enviar o padrão de nome.");
          }
          return response.json();
      })
      .then((data) => {
          console.log("Padrão de nome enviado com sucesso:", data);
      })
      .catch((error) => {
          console.error("Erro:", error);
      });
  }
});
