// Espera que o DOM esteja completamente carregado antes de iniciar o JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Obtém uma referência ao botão "Adicionar Médico"
    const btnAdicionarMedico = document.querySelector("[data-bs-toggle='modal']");
    
    // Obtém uma referência ao modal
    const modal = new bootstrap.Modal(document.querySelector(".modal"));
    
    // Adiciona um ouvinte de evento de clique ao botão "Adicionar Médico"
    btnAdicionarMedico.addEventListener("click", function() {
        // Mostra o modal quando o botão for clicado
        modal.show();
    });

    // Função para validar o formulário e mostrar o toast
    window.validarFormulario = function() {
        var nome = document.getElementById("nome").value;
        var especialidade = document.getElementById("especialidade").value;
        var crm = document.getElementById("crm").value;

        if (nome === "" || especialidade === "" || crm === "") {
            document.getElementById("liveToast").classList.add("show");
            return false;
        }
        return true;
    }
});
