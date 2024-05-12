document.getElementById('medicoForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const formData = {
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
            } else {
                alert(data.mes + " Por favor, tente novamente.");
            }
        })
        .catch(error => {
            console.error('Erro ao enviar os dados:', error);
            alert("Erro ao enviar os dados. Por favor, tente novamente.");
        });
});

function formatarNome(str) {
    let nomeFormatado = str.trim();
    
    nomeFormatado = nomeFormatado.toLowerCase().replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });

    return nomeFormatado;
}
