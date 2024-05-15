let id;
function listaMedicos() {
  fetch('http://localhost:3000/api/listMedicos')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector('#medicosTable tbody');
      tableBody.innerHTML = ''; // Limpar a tabela antes de adicionar os dados

      data.forEach((medico, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${medico.nome}</td>
                    <td>${medico.especialidade}</td>
                    <td>${medico.crm}</td>
                    <td class="d-none medicoId">${medico.id}</td>
                    <td>
                        <button type='button' class='btn btn-outline-info editButton bot' data-id="${medico.id}" data-bs-toggle="modal" data-bs-target=".edit-modal">Editar</button>
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

  fetch(`http://localhost:3000/api/editarMedico/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome: formatarNome(novoNome), especialidade: formatarNome(novoEspecialidade), crm: novoCrm })
  })
    .then(response => response.json())
    .then(data => {
      if (data.boo) {
        // Sucesso: fechar o modal e atualizar a lista de médicos
        $('#editModal').modal('hide');
        listaMedicos(); // Atualizar a lista de médicos
      } else {
        // Erro: exibir uma mensagem de erro
        alert(data.mes);
      }
    })
    .catch(error => {
      console.error('Erro ao editar o médico:', error);
    });
});

document.getElementById("delete-btn").addEventListener("click", () =>{
  fetch(`http://localhost:3000/api/excluirMedico/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao excluir médico');
        }
        return response.json();
    })
    .then(data => {
        console.log('Médico excluído com sucesso:', data);
        listaMedicos(); // Atualizar a lista de médicos após a exclusão
    })
    .catch(error => {
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

  nomeFormatado = nomeFormatado.toLowerCase().replace(/\b\w/g, function(char) {
      return char.toUpperCase();
  });

  return nomeFormatado;
}





document.addEventListener('DOMContentLoaded', listaMedicos);