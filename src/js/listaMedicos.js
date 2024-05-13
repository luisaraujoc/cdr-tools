//
function listaMedicos() {
    fetch('http://localhost:3000/api/listMedicos') // assumindo que o endpoint está corretamente configurado
        .then(response => response.json())
        .then(data => {
            
            const tableBody = document.querySelector('#medicosTable tbody');
            tableBody.innerHTML = ''; // Limpar a tabela antes de adicionar os dados

            data.forEach(medico => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${medico.id}</td>
                    <td>${medico.nome}</td>
                    <td>${medico.especialidade}</td>
                    <td>${medico.crm}</td>
                `;
                tableBody.appendChild(row);
            })

        })
        .catch(error => {
            console.log('Erro ao buscar os dados:', error);
            // mostrar modal de erro
            // em produção
        });
}

document.addEventListener('DOMContentLoaded', listaMedicos); // Chamar a função ao carregar a página