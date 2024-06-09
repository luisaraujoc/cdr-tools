let nomePacienteBoo = false; // 1
let nomeMedicoBoo = false; // 2
let numExameBoo = false; // 3
let dataExameBoo = false; // 4

document.addEventListener("DOMContentLoaded", function () {
    fetch(`http://localhost/api/padraoArqName`)
        .then((response) => response.json())
        .then((jsonData) => {
            data = jsonData;
            let pattern = data[0].pattern;

            let nameArq = "exame"

            for (let i = 0; i < pattern.length; i++) {
                switch (pattern[i]) {
                    case 1:
                        nameArq += "_{nomePaciente}"
                        break;
                    case 2:
                        nameArq += "_{nomeMedico}"
                        break;
                    case 3:
                        nameArq += "_{numExame}"
                        break;
                    case 4:
                        nameArq += "_{dataExame}"
                        break;
                }
            }

            document.getElementById("examePadraoAtual").textContent = nameArq;



        })
        .catch((error) => {
            console.log("Erro ao carregar o JSON:", error);
        });


    const filenamePatternInput = document.getElementById("examePadrao");

})