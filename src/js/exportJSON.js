document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um evento de clique ao botão "Salvar"
    document.querySelector(".btn-primary").addEventListener("click", function() {
        // Objeto para armazenar os valores dos campos do formulário
        var formData = {};

        // Obtém todos os campos do formulário
        var formFields = document.querySelectorAll("input, select, textarea");

        // Itera sobre os campos do formulário
        formFields.forEach(function(field) {
            // Ignora os campos sem nome
            if (field.name) {
                // Verifica o tipo do campo
                switch (field.type) {
                    case "checkbox":
                        // Adiciona o valor do campo de checkbox ao objeto somente se estiver marcado
                        formData[field.name] = field.checked;
                        break;
                    case "radio":
                        // Adiciona o valor do campo de radio ao objeto somente se estiver selecionado
                        if (field.checked) {
                            formData[field.name] = field.value;
                        }
                        break;
                    default:
                        // Adiciona o valor do campo ao objeto
                        formData[field.name] = field.value;
                        break;
                }
            }
        });

        // Converte o objeto em JSON
        var jsonData = JSON.stringify(formData);

        // Exibe o JSON no console (você pode enviá-lo para o servidor ou fazer qualquer outra coisa com ele)
        console.log(jsonData);
    });
});
