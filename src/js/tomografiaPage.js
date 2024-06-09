document.addEventListener("DOMContentLoaded", function() {
  function toggleFieldset(radioGroupName, targetClass) {
      document.querySelectorAll(`input[name=${radioGroupName}]`).forEach((input) => {
          input.addEventListener("change", function() {
              const targetFieldset = input.closest('.form-group').querySelector(targetClass);
              if (input.value === "sim") {
                  targetFieldset.classList.remove("d-none");
              } else {
                  targetFieldset.classList.add("d-none");
              }
          });
      });
  }

  // Função para o campo "Outros" da pergunta 6
  function toggleCheckbox(checkboxId, targetClass) {
      const checkbox = document.getElementById(checkboxId);
      const targetFieldset = document.querySelector(targetClass);
      checkbox.addEventListener("change", function() {
          if (checkbox.checked) {
              targetFieldset.classList.remove("d-none");
          } else {
              targetFieldset.classList.add("d-none");
          }
      });
  }

  toggleFieldset("cirurgia", ".form-group");
  toggleFieldset("outraCirurgia", ".form-group");
  toggleFieldset("quimioterapia", ".form-group");
  toggleFieldset("medicamento", ".form-group");
  toggleFieldset("alergia", ".form-group");
  toggleFieldset("alergiaMedicamentosa", ".form-group");
  toggleFieldset("alergiaAlimentar", ".form-group");
  toggleFieldset("alergiaLimpeza", ".form-group");
  toggleFieldset("alergiaMetais", ".form-group");
  toggleFieldset("tcAnterior", ".form-group");
  toggleFieldset("examePrevio", ".form-group");
  toggleFieldset("contrasteIodado", ".form-group");
  toggleFieldset("intercorrenciaContrasIodado", ".form-group");
  toggleFieldset("hipoglicemiante", ".form-group");

  // Adicionando o evento para o checkbox "Outros" da pergunta 6
  toggleCheckbox("outros", ".outroBox");
});