// Função para mostrar ou ocultar divs com base na opção selecionada
function toggleDivVisibility(questionName, optionValue, secondaryClass) {
  // Seleciona todas as divs com a classe "pergunta"
  var perguntas = document.querySelectorAll(".pergunta");

  // Itera sobre as divs de pergunta
  perguntas.forEach(function (pergunta) {
    // Verifica se a pergunta tem o mesmo nome da pergunta selecionada
    if (pergunta.querySelector("[name=" + questionName + "]:checked")) {
      // Se a opção selecionada for igual ao valor esperado
      if (
        pergunta.querySelector("[name=" + questionName + "]:checked").value ===
        optionValue
      ) {
        // Exibe a div com a classe correspondente
        pergunta.querySelector(".hide." + secondaryClass).style.display =
          "block";
      } else {
        // Oculta a div com a classe correspondente
        pergunta.querySelector(".hide." + secondaryClass).style.display =
          "none";
      }
    }
  });
}

// Adiciona eventos de clique para cada grupo de botões de opção
document.addEventListener("DOMContentLoaded", function () {
  // Jejum
  document.querySelectorAll('[name="quest4"]').forEach(function (radio) {
    radio.addEventListener("click", function () {
      toggleDivVisibility("quest4", "sim", "condictanswer");
    });
  });

  // Exames prévios da área de estudo
  document.querySelectorAll('[name="quest6"]').forEach(function (radio) {
    radio.addEventListener("click", function () {
      toggleDivVisibility("quest6", "sim", "condictanswer");
    });
  });

  // Anestesia
  document.querySelectorAll('[name="quest7"]').forEach(function (radio) {
    radio.addEventListener("click", function () {
      toggleDivVisibility("quest7", "sim", "condictAnestAnswer");
    });
  });

  // Cirurgia na área de estudo
  document.querySelectorAll('[name="quest8"]').forEach(function (radio) {
    radio.addEventListener("click", function () {
      toggleDivVisibility("quest8", "sim", "condictCirurgiaAnswer");
    });
  });

  // Outra cirurgia na área de estudo
  document.querySelectorAll('[name="quest9"]').forEach(function (radio) {
    radio.addEventListener("click", function () {
      toggleDivVisibility("quest9", "sim", "condictOutraCirurgiaAnswer");
    });
  });

  // Quimioterapia
  document.querySelectorAll('[name="quest10"]').forEach(function (radio) {
    radio.addEventListener("click", function () {
      toggleDivVisibility("quest10", "sim", "QuimioTempo");
    });
  });

  // Alergia
  document.querySelectorAll('[name="quest12"]').forEach(function (radio) {
    radio.addEventListener("click", function () {
      toggleDivVisibility("quest12", "sim", "alergia");
    });
  });

  // Tabagista
  document.querySelectorAll('[name="quest13"]').forEach(function (radio) {
    radio.addEventListener("click", function () {
      toggleDivVisibility("quest13", "sim", "tabagista");
    });
  });

  // Cineangiocoronariografia e/ou Angioplastia Coronária
  document.querySelectorAll('[name="quest15"]').forEach(function (radio) {
    radio.addEventListener("click", function () {
      toggleDivVisibility("quest15", "sim", "angio");
    });
  });

  // Intercorrência
  document
    .querySelectorAll('[name="intercorrenciaCondict"]')
    .forEach(function (radio) {
      radio.addEventListener("click", function () {
        toggleDivVisibility(
          "intercorrenciaCondict",
          "sim",
          "intercorrenciaText"
        );
      });
    });

  // Exames com contraste
  document.querySelectorAll('[name="quest16"]').forEach(function (radio) {
    radio.addEventListener("click", function () {
      toggleDivVisibility("quest16", "sim", "contra");
    });
  });

  document
    .querySelectorAll('[name="intercorrenciaCondict16"]')
    .forEach(function (radio) {
      radio.addEventListener("click", function () {
        toggleDivVisibility(
          "intercorrenciaCondict16",
          "sim",
          "intercorrenciaText"
        );
      });
    });
});

// Enfermidades
document.addEventListener("DOMContentLoaded", function () {
  var outrosCheckbox = document.getElementById("outros");
  var outrasEnfermidadesDiv = document.querySelector(".enfermidades");

  outrosCheckbox.addEventListener("change", function () {
    if (outrosCheckbox.checked) {
      outrasEnfermidadesDiv.classList.remove("hide");
    } else {
      outrasEnfermidadesDiv.classList.add("hide");
    }
  });
});

// add exame
document.getElementById("addExame").addEventListener("click", function () {
  var examesContainer = document.getElementById("examesContainer");
  var clonedExame = examesContainer.firstElementChild.cloneNode(true);

  // Limpar os campos clonados
  clonedExame.querySelectorAll('input[type="text"]').forEach(function (input) {
    input.value = "";
  });
  clonedExame
    .querySelectorAll('input[type="number"]')
    .forEach(function (input) {
      input.value = "";
    });
  clonedExame.querySelectorAll('input[type="date"]').forEach(function (input) {
    input.value = "";
  });

  examesContainer.appendChild(clonedExame);
});

// calc idade
document
  .getElementById("dataNascimento")
  .addEventListener("change", function () {
    calcularIdade(this.value);
  });

function calcularIdade(dataNascimento) {
  var dataNasc = new Date(dataNascimento);
  var dataAtual = new Date();

  var diff = Math.abs(dataAtual.getTime() - dataNasc.getTime());
  var idade = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

  document.getElementById("idadeVal").value = idade + " anos";
}
