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
                        <button type='button' class='btn btn-outline-info editButton' data-id="${medico.id}">Editar</button>
                        <button type='button' class='btn btn-danger deleteButton' data-id="${medico.id}">Excluir</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });

            // Adiciona ouvintes de evento para os botões de editar e excluir
            const editButtons = document.querySelectorAll('.editButton');
            editButtons.forEach(button => {
                button.addEventListener('click', editarMedico);
            });

            const deleteButtons = document.querySelectorAll('.deleteButton');
            deleteButtons.forEach(button => {
                button.addEventListener('click', excluirMedico);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
            // Mostrar modal de erro
            // Em produção
        });
}

function editarMedico(event) {
    const id = event.target.dataset.id;
    // Aqui você pode adicionar a lógica para abrir o modal de edição com o ID do médico
}

function excluirMedico(event) {
    const id = event.target.dataset.id;
    // Aqui você pode adicionar a lógica para abrir o modal de exclusão com o ID do médico
}

document.addEventListener('DOMContentLoaded', listaMedicos);