document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('medicoForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Verificar se há médicos na lista antes de determinar o último ID
        fetch('http://localhost:3000/api/listMedicos')
            .then(response => response.json())
            .then(data => {
                let ultimoID;
                if (data.length > 0) {
                    // Se houver médicos na lista, obter o último ID usado
                    ultimoID = data[data.length - 1].id;
                } else {
                    // Se não houver médicos na lista, reiniciar o ID para 0
                    ultimoID = 0;
                }

                // Incrementar o último ID e armazená-lo novamente
                ultimoID++;
                localStorage.setItem('ultimoID', ultimoID);

                const formData = {
                    id: ultimoID, // Usando o ID incremental
                    nome: formatarNome(document.getElementById("nome").value),
                    especialidade: formatarNome(document.getElementById("especialidade").value),
                    crm: document.getElementById("crm").value.trim()
                };

                fetch('http://localhost:3000/api/addMedico/enviar', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.boo) {
                        alert("Dados enviados com sucesso!");
                        // Limpar os campos do formulário após o envio bem sucedido
                        document.getElementById('nome').value = '';
                        document.getElementById('especialidade').value = '';
                        document.getElementById('crm').value = '';
                        // Fechar o modal após o envio bem sucedido
                        const modal = new bootstrap.Modal(document.querySelector('.modal'));
                        modal.hide();
                        // Atualizar a tabela de médicos após o envio bem sucedido
                        listaMedicos();
                    } else {
                        alert(data.mes + " Por favor, tente novamente.");
                    }
                })
                .catch(error => {
                    console.log('Erro ao enviar os dados:', error);
                    alert("Erro ao enviar os dados. Por favor, tente novamente.");
                });
            })
            .catch(error => {
                console.log('Erro ao buscar os dados:', error);
                alert("Erro ao buscar os dados. Por favor, tente novamente.");
            });
    });

    // Restante do seu código aqui...
    function formatarNome(str) {
        let nomeFormatado = str.trim();

        nomeFormatado = nomeFormatado.toLowerCase().replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });

        return nomeFormatado;
    }
});