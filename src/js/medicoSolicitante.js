document.addEventListener("DOMContentLoaded", function () {
    var medicoSelect = document.getElementById("medicoSolicitante");
    var crmInput = document.getElementById("crm");
    var especialidadeInput = document.getElementById("especialidade");
    let data; // Definindo data fora do escopo do fetch

    // Carregar os dados do JSON
    fetch(`http://192.168.3.34/api/listMedicos`)
        .then((response) => response.json())
        .then((jsonData) => {
            data = jsonData; // Atribui os dados do JSON à variável global data
            // Preenche o select com os nomes dos médicos
            data.forEach(function (medico) {
                var option = document.createElement("option");
                option.text = medico.nome;
                option.value = medico.nome;
                medicoSelect.add(option);
            });
        })
        .catch((error) => {
            console.log("Erro ao carregar o JSON:", error);
        });

    // Função para testar os campos
    function testarCampos() {
        var selectedMedico = medicoSelect.value;
        var selectedMedicoData = data.find(function (m) {
            return m.nome === selectedMedico;
        });
        console.log("Nome do médico selecionado:", selectedMedico);
        console.log("CRM:", crmInput.value);
        console.log("Especialidade:", especialidadeInput.value);
    }

    function TestarCampoMedico() {
        var selectedMedico = medicoSelect.value;
        var selectedMedicoData = data.find(function (m) {
            return m.nome === selectedMedico;
        });
        console.log("Nome do médico selecionado:", selectedMedico);
    }

    // Evento de mudança no select
    if (crmInput != null && especialidadeInput != null) {
        medicoSelect.addEventListener("change", function () {
            var selectedMedico = this.value;
            var selectedMedicoData = data.find(function (m) {
                return m.nome === selectedMedico;
            });
            crmInput.value = selectedMedicoData.crm;
            especialidadeInput.value = selectedMedicoData.especialidade
    
            // Chama a função para testar os campos
            testarCampos();
        });
    } else {
        medicoSelect.addEventListener("change", function () {
            var selectedMedico = this.value;
            var selectedMedicoData = data.find(function (m) {
                return m.nome === selectedMedico;
            });
                
            // Chama a função para testar os campos
            TestarCampoMedico();
        });
    }
});
