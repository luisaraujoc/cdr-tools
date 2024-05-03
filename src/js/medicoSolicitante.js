document.addEventListener("DOMContentLoaded", function () {
  var medicoSelect = document.getElementById("medicoSolicitante");
  var crmInput = document.getElementById("crm");
  var especialidadeInput = document.getElementById("especialidade");
  let medicoSolicitante = "../../src/json/medicoSolicitante.json";
  let data; // Definindo data fora do escopo do fetch

  // Carregar os dados do JSON
  fetch(medicoSolicitante)
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

  // Evento de mudança no select
  medicoSelect.addEventListener("change", function () {
      var selectedMedico = this.value;
      var selectedMedicoData = data.find(function (m) {
          return m.nome === selectedMedico;
      });
      crmInput.value = selectedMedicoData.crm;
      especialidadeInput.value = selectedMedicoData.especialidade;
  });
});
