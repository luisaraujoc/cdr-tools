// Adiciona um ouvinte de evento de clique ao botão "Excluir"
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteButton")) {
      const id = event.target.dataset.id;
      // Abrir o modal de exclusão
      const modal = new bootstrap.Modal(document.querySelector(".delete-modal"));
      modal.show();
      // Adicionar ouvinte de evento para o botão de confirmação de exclusão dentro do modal
      document.querySelector('.btn-confirm-delete').addEventListener('click', function() {
        // Lógica de exclusão aqui...
        const confirmacao = confirm("Tem certeza que deseja excluir este médico?");
        if (confirmacao) {
          fetch(`http://localhost:3000/api/excluirMedico/${id}`, {
            method: "DELETE",
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.boo) {
                alert("Médico excluído com sucesso!");
                listaMedicos(); // Atualiza a lista após exclusão bem sucedida
              } else {
                alert(data.mes);
              }
            })
            .catch((error) => {
              console.error("Erro ao excluir médico:", error);
              alert("Erro ao excluir médico. Por favor, tente novamente.");
            });
        }
      });
    }
  });
  
  // Adiciona um ouvinte de evento de clique ao botão "Editar"
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("editButton")) {
      const id = event.target.dataset.id;
      // Busca os dados do médico pelo ID
      fetch(`http://localhost:3000/api/listMedicos/${id}`)
        .then((response) => response.json())
        .then((data) => {
          // Preenche o formulário de edição com os dados do médico
          document.getElementById("editNome").value = data.nome;
          document.getElementById("editEspecialidade").value = data.especialidade;
          document.getElementById("editCrm").value = data.crm;
          // Abre o modal de edição
          const modal = new bootstrap.Modal(
            document.querySelector(".edit-modal")
          );
          modal.show();
          // Adiciona um ouvinte de evento de envio para o formulário de edição
          document
            .getElementById("editMedicoForm")
            .addEventListener("submit", function (event) {
              event.preventDefault();
              const formData = {
                nome: document.getElementById("editNome").value,
                especialidade: document.getElementById("editEspecialidade").value,
                crm: document.getElementById("editCrm").value.trim(),
              };
              // Envia uma requisição PUT para atualizar os dados do médico
              fetch(`http://localhost:3000/api/editarMedico/${id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              })
                .then((response) => response.json())
                .then((data) => {
                  if (data.boo) {
                    alert("Dados do médico atualizados com sucesso!");
                    listaMedicos(); // Atualiza a lista após edição bem sucedida
                    modal.hide(); // Fecha o modal de edição
                  } else {
                    alert(data.mes);
                  }
                })
                .catch((error) => {
                  console.error("Erro ao editar médico:", error);
                  alert("Erro ao editar médico. Por favor, tente novamente.");
                });
            });
        })
        .catch((error) => {
          console.error("Erro ao buscar os dados do médico:", error);
          alert("Erro ao buscar os dados do médico. Por favor, tente novamente.");
        });
    }
  });