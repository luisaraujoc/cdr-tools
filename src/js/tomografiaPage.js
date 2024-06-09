document.addEventListener("DOMContentLoaded", function () {
  function toggleVisibility(radioId, targetClass, oppositeRadioId) {
    const radio = document.getElementById(radioId);
    const oppositeRadio = document.getElementById(oppositeRadioId);
    const targetElement = radio
      .closest(".form-group")
      .querySelector(targetClass);

    radio.addEventListener("change", function () {
      if (radio.checked) {
        targetElement.classList.remove("d-none");
      }
    });

    oppositeRadio.addEventListener("change", function () {
      if (oppositeRadio.checked) {
        targetElement.classList.add("d-none");
      }
    });
  }

  function toggleNestedVisibility(
    radioId,
    targetClass,
    oppositeRadioId,
    nestedRadioId,
    nestedTargetClass,
    nestedOppositeRadioId
  ) {
    const radio = document.getElementById(radioId);
    const oppositeRadio = document.getElementById(oppositeRadioId);
    const targetElement = radio
      .closest(".form-group")
      .querySelector(targetClass);
    const nestedRadio = document.getElementById(nestedRadioId);
    const nestedTargetElement = targetElement.querySelector(nestedTargetClass);
    const nestedOppositeRadio = document.getElementById(nestedOppositeRadioId);

    radio.addEventListener("change", function () {
      if (radio.checked) {
        targetElement.classList.remove("d-none");
      }
    });

    oppositeRadio.addEventListener("change", function () {
      if (oppositeRadio.checked) {
        targetElement.classList.add("d-none");
      }
    });

    nestedRadio.addEventListener("change", function () {
      if (nestedRadio.checked) {
        nestedTargetElement.classList.remove("d-none");
      }
    });

    nestedOppositeRadio.addEventListener("change", function () {
      if (nestedOppositeRadio.checked) {
        nestedTargetElement.classList.add("d-none");
      }
    });
  }

  // Questão 3
  toggleVisibility("cirurgiaSim", ".form-group.d-none", "cirurgiaNao");

  // Questão 4
  toggleVisibility(
    "outraCirurgiaSim",
    ".form-group.d-none",
    "outraCirurgiaNao"
  );

  // Questão 5
  toggleVisibility(
    "quimioterapiaSim",
    ".form-group.d-none",
    "quimioterapiaNao"
  );

  // Questão 7
  toggleVisibility("medicamentoSim", ".form-group.d-none", "medicamentoNao");

  // Questão 8
  toggleVisibility("alergiaSim", ".form-group.d-none", "alergiaNao");

  // Questão 9
  toggleVisibility(
    "alergiaMedicamentosaSim",
    ".form-group.d-none",
    "alergiaMedicamentosaNao"
  );

  // Questão 10
  toggleVisibility(
    "alergiaAlimentarSim",
    ".form-group.d-none",
    "alergiaAlimentarNao"
  );

  // Questão 13
  toggleNestedVisibility(
    "tcAnteriorSim",
    ".form-group.d-none",
    "tcAnteriorNao",
    "tcAnteriorInterSim",
    ".form-group.d-none",
    "tcAnteriorInterNao"
  );

  // Questão 14
  toggleVisibility("examePrevioSim", ".form-group.d-none", "examePrevioNao");

  // Questão 16
  toggleNestedVisibility(
    "contrasteIodadoSim",
    ".form-group.d-none",
    "contrasteIodadoNao",
    "intercorrenciaContrasIodadoSim",
    ".form-group.d-none",
    "intercorrenciaContrasIodadoNao"
  );

  // Questão 17
  toggleVisibility(
    "hipoglicemianteSim",
    ".form-group.d-none",
    "hipoglicemianteNao"
  );
});
