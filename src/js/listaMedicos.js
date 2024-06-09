let id;
let listaDeMedicos = []

function listaMedicos() {
  fetch('http://localhost:3000/api/listMedicos')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector('#medicosTable tbody');
      tableBody.innerHTML = ''; // Limpar a tabela antes de adicionar os dados
      listaDeMedicos = data;

      data.forEach((medico, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${medico.nome}</td>
                    <td>${medico.especialidade}</td>
                    <td>${medico.crm}</td>
                    <td class="d-none medicoId">${medico.id}</td>
                    <td>
                        <button type='button' class='btn btn-outline-info editButton bot' onclick="coverInputEdit(${medico.id})" data-id="${medico.id}" data-bs-toggle="modal" data-bs-target=".edit-modal">Editar</button>
                        <button type='button' class='btn btn-danger deleteButton bot' data-id="${medico.id}" data-bs-toggle="modal" data-bs-target=".delete-modal">Excluir</button>
                    </td>
                `;
        tableBody.appendChild(row);
      });

      // Adiciona ouvintes de evento para os botões de editar e excluir
      const editButtons = document.querySelectorAll('.editButton');
      editButtons.forEach(button => {
        button.addEventListener('click', setId);
      });

      const deleteButtons = document.querySelectorAll('.deleteButton');
      deleteButtons.forEach(button => {
        button.addEventListener('click', setId);
      });
    })
    .catch(error => {
      console.error('Erro ao buscar os dados:', error);
      // Mostrar modal de erro
      // Em produção
    });
}

document.getElementById("edit-save").addEventListener("click", () => {
  let novoNome = document.getElementById("editNome").value;
  let novoEspecialidade = document.getElementById("editEspecialidade").value;
  let novoCrm = document.getElementById("editCrm").value;
  let senha = document.getElementById("editSenha").value;

  fetch(`http://localhost:3000/api/editarMedico/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome: formatarNome(novoNome), especialidade: formatarNome(novoEspecialidade), crm: novoCrm, senha: senha })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.boo);
      if (!data.boo) {
        document.getElementById("msgErroPadrao").innerHTML = "Senha incorreta!"
        document.getElementById("popupFail").style.display = "flex";
      } else {

        listaMedicos();
      }
    })
    .catch(error => {
      cdocument.getElementById("msgErroPadrao").innerHTML = "Erro ao editar medico!"
      document.getElementById("popupFail").style.display = "flex";
      console.error('Erro ao excluir médico:', error);
    });
});

document.getElementById("close-edit").addEventListener("click", () => {
  document.getElementById("editNome").value = "";
  document.getElementById("editEspecialidade").value = "";
  document.getElementById("editCrm").value = "";
  document.getElementById("editSenha").value = "";
})

document.getElementById("delete-btn").addEventListener("click", () => {
  var senha = document.getElementById("senhaExcluir").value;
  fetch(`http://localhost:3000/api/excluirMedico/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ senha })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao excluir médico');
      }
      return response.json();
    })
    .then(data => {
      if (!data.boo) {
        document.getElementById("msgErroPadrao").innerHTML = "Senha incorreta!"
        document.getElementById("popupFail").style.display = "flex";
      }
      listaMedicos(); // Atualizar a lista de médicos após a exclusão
    })
    .catch(error => {
      document.getElementById("msgErroPadrao").innerHTML = "Erro ao fazer exclusão!"
      document.getElementById("popupFail").style.display = "flex";
      console.error('Erro ao excluir médico:', error);
    });

})

function setId(event) {
  // event.currentTarget se refere ao botão que acionou o evento
  const elemento = event.currentTarget;
  id = elemento.getAttribute("data-id");
}

function formatarNome(str) {
  let nomeFormatado = str.trim();

  nomeFormatado = nomeFormatado.toLowerCase().replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });

  return nomeFormatado;
}

function coverInputEdit(id){
  for (let i = 0; i < listaDeMedicos.length; i++) {
    if (listaDeMedicos[i].id == id) {
      document.getElementById("editNome").value = listaDeMedicos[i].nome;
      document.getElementById("editEspecialidade").value = listaDeMedicos[i].especialidade;
      document.getElementById("editCrm").value = listaDeMedicos[i].crm;
      break;
    }
  }
}



document.addEventListener('DOMContentLoaded', listaMedicos);