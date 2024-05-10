const radioButtonsq4 = document.querySelectorAll('input[name="quest4"]');
let q4selected = false;
radioButtonsq4.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "sim") {
            q4selected = true;
        } else if (radioButton.value === "nao") {
            q4selected = false;
        }
    });
});

const radioButtonsq6 = document.querySelectorAll('input[name="quest6"]');
let q6selected = false;
radioButtonsq6.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "sim") {
            q6selected = true;
        } else if (radioButton.value === "nao") {
            q6selected = false;
        }
    });
});

const radioButtonsq7 = document.querySelectorAll('input[name="quest7"]');
let q7selected = false;
radioButtonsq7.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "sim") {
            q7selected = true;
        } else if (radioButton.value === "nao") {
            q7selected = false;
        }
    });
});

const radioButtonsq7Answer = document.querySelectorAll('input[name="quest71Answer"]');
let localGeralq7 = false;
radioButtonsq7Answer.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "local") {            
            localGeralq7 = true;
        } else if (radioButton.value === "geral") {
            localGeralq7 = false;
        }
    });
});

const radioButtonsq8 = document.querySelectorAll('input[name="quest8"]');
let q8selected = false;
radioButtonsq8.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "sim") {
            q8selected = true;
        } else if (radioButton.value === "nao") {
            q8selected = false;
        }
    });
});

const radioButtonsq9 = document.querySelectorAll('input[name="quest9"]');
let q9selected = false;
radioButtonsq9.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "sim") {
            q9selected = true;
        } else if (radioButton.value === "nao") {
            q9selected = false;
        }
    });
});

const radioButtonsq10 = document.querySelectorAll('input[name="quest10"]');
let q10selected = false;
radioButtonsq10.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "sim") {
            q10selected = true;
        } else if (radioButton.value === "nao") {
            q10selected = false;
        }
    });
});

const radioButtonsq11 = document.querySelectorAll('.d-inp');
let hipertensao = false;
let cardiopatias = false;
let diabetes = false;
let insurenal = false;
let anemiaFalci = false;
let mieloma = false;
let asma = false;
let rinite = false;
let outros = false;
radioButtonsq11.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        switch (radioButton.name) {
            case 'hipertensao':
                hipertensao = hipertensao ? false : true;
                break;
            case 'cardiopatias':    
                cardiopatias = cardiopatias ? false : true;
                break;
            case 'diabetes':
                diabetes = diabetes ? false : true;
                break;
            case 'insurenal':
                insurenal = insurenal ? false : true;
                break;
            case 'anemiaFalci':
                anemiaFalci = anemiaFalci ? false : true;
                break;
            case 'mieloma':
                mieloma = mieloma ? false : true;
                break;
            case 'asma':
                asma = asma ? false : true;
                break;
            case 'rinite':
                rinite = rinite ? false : true;
                break;
            case 'outros': 
                outros = outros ? false : true;
                break;
        }
    });
});

const radioButtonsq12 = document.querySelectorAll('input[name="quest12"]');
let q12selected = false;
radioButtonsq12.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "sim") {
            q12selected = true;
        } else if (radioButton.value === "nao") {
            q12selected = false;
        }
    });
});

const radioButtonsq13 = document.querySelectorAll('input[name="quest13"]');
let q13selected = false;
radioButtonsq13.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "sim") {
            q13selected = true;
        } else if (radioButton.value === "nao") {
            q13selected = false;
        }
    });
});

const radioButtonsq14 = document.querySelectorAll('input[name="quest14"]');
let q14selected = false;
radioButtonsq14.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "sim") {
            q14selected = true;
        } else if (radioButton.value === "nao") {
            q14selected = false;
        }
    });
});

const radioButtonsq15 = document.querySelectorAll('input[name="quest15"]');
let q15selected = false;
radioButtonsq15.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "sim") {
            q15selected = true;
        } else if (radioButton.value === "nao") {
            q15selected = false;
        }
    });
});



const radioButtonsq15_1 = document.querySelectorAll('input[name="intercorrenciaCondict"]');
let q15_1selected = false;
radioButtonsq15_1.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "sim") {
            q15_1selected = true;
        } else if (radioButton.value === "nao") {
            q15_1selected = false;
        }
    });
});

const radioButtonsq16 = document.querySelectorAll('input[name="quest16"]');
let q16selected = false;
radioButtonsq16_1.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "sim") {
            q16selected = true;
        } else if (radioButton.value === "nao") {
            q16selected = false;
        }
    });
});

const radioButtonsq16_1 = document.querySelectorAll('input[name="intercorrenciaCondict16"]');
let q16_1selected = false;
radioButtonsq16_1.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "sim") {
            q16_1selected = true;
        } else if (radioButton.value === "nao") {
            q16_1selected = false;
        }
    });
});

const radioButtonsq17 = document.querySelectorAll('input[name="gravida"]');
let q17selected = false;
radioButtonsq17.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "sim") {
            q17selected = true;
        } else if (radioButton.value === "nao") {
            q17selected = false;
        }
    });
});

const radioButtonsq18 = document.querySelectorAll('input[name="amamentando"]');
let q18selected = false;
radioButtonsq18.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "sim") {
            q18selected = true;
        } else if (radioButton.value === "nao") {
            q18selected = false;
        }
    });
});


const htmlToprint = () => {

    const converterData = (data) => {
        var partes = data.split("-");
        var dataConvertida = partes[2] + "/" + partes[1] + "/" + partes[0];
        return dataConvertida;
    }

    const simNaoStr = (perg) => {
        let ret = perg ? "(x)Sim ( )Não" : "( )Sim (x)Não"; 
        return ret;
    };
    
    const pergScritStr = (perg, varName) => {
        let ret = perg ? `let ${varName} = true` : `let ${varName} = false`;
        return ret;
    };
    
    const funcRowTable = (exame, valor, data) =>{
        let ret = '';
        for(let i = 0; i < exame.length; i++){             
            ret += `<tr><td>${exame[i].value}</td><td>${valor[i].value}</td><td>${converterData(data[i].value)}</td></tr>`
        }
        return ret;    
    }

    const isSelected = op => op ? 'x' : ' '; 

    
    let nomePaciente = document.getElementById("nomeCompleto");
    let dataNascimento = document.getElementById("dataNascimento");
    let idadePaciente = document.getElementById("idadeVal");
    let pesoPaciente = document.getElementById("peso");
    let alturaPaciente = document.getElementById("altura");
    let procedimento = document.getElementById("procedimento");
    let dataExame = document.getElementById("dataExame");
    let exame = document.getElementById("exame");
    let horaExame = document.getElementById("horaExame");
    let paExame = document.getElementById("paExame");
    let fcExame = document.getElementById("fcExame");
    let frExame = document.getElementById("frExame");
    let spoExame = document.getElementById("spo2Exame");
    let taxExame = document.getElementById("taxExame");
    let medicoSolicitante = document.getElementById("medicoSolicitante");
    let crm = document.getElementById("crm");
    let especialidade = document.getElementById("especialidade");
    let q1 = document.getElementById("q1");
    let q2 = document.getElementById("quest");
    let q2QntTempo = document.getElementById("quanto-tempo");
    let q3 = document.getElementById("quest3")
    let q4 = q4selected;
    let q4Desde = document.getElementById("answerCondict")
    let q5Exame = document.querySelectorAll(".q5exame")
    let q5Valor = document.querySelectorAll(".q5valor")
    let q5data = document.querySelectorAll(".q5data")
    let q6 = q6selected;
    let q6Quais = document.getElementById("condictVerifyAnswer")
    let q7 = q7selected;
    let q7C = localGeralq7;
    let q8 = q8selected;
    let q8Qual = document.getElementById("quest81")    
    let q9 = q9selected;
    let q9Qual = document.getElementById("quest91")
    let q10 = q10selected
    let q10Tempo = document.getElementById("quest101")
    let q11Quais = document.getElementById("outrasEnfermidades")
    let q12 = q12selected;
    let q12Qual = document.getElementById("alergiaAnswer")
    let q13 = q13selected;
    let q13Obs = document.getElementById("Observações");
    let q14 = q14selected;
    let q15 = q15selected;
    let q15_1 = q15_1selected;
    let q15_1Quais = document.getElementById("intercorrenciaText")
    let q16 = q16selected;    
    let q16_1 = q15_1selected;
    let q16_1Quais = document.getElementById("intercorrenciaText16")
    let q17 = q17selected;
    let q18 = q18selected;

    // variaveis que levarão texto para o html
    let textq4 = simNaoStr(q4);
    let textq6 = simNaoStr(q6);
    let textq7 = simNaoStr(q7);
    let textq8 = simNaoStr(q8);    
    let textq9 = simNaoStr(q9);
    let textq10 = simNaoStr(q10);
    let textq12 = simNaoStr(q12);
    let textq13 = simNaoStr(q13);
    let textq14 = simNaoStr(q14);
    let textq15 = simNaoStr(q15);
    let textq15_1 = simNaoStr(q15_1);
    let textq16 = simNaoStr(q16);
    let textq16_1 = simNaoStr(q16_1);
    let textq17 = simNaoStr(q17);    
    let textq18 = simNaoStr(q18);
    let textq11Hipertensao = isSelected(hipertensao); 
    let textq11Cardiopatias = isSelected(cardiopatias);
    let textq11Diabetes = isSelected(diabetes);
    let textq11Insurenal = isSelected(insurenal);
    let textq11AnemiaFalci = isSelected(anemiaFalci);
    let textq11Mieloma = isSelected(mieloma);
    let textq11Asma = isSelected(asma);
    let textq11Rinite = isSelected(rinite);
    let textq11Outros = isSelected(outros);
    let q4script = pergScritStr(q4, "q4");
    let q6script = pergScritStr(q6, "q6");
    let q7script = pergScritStr(q7, "q7");
    let q8script = pergScritStr(q8, "q8");    
    let q9script = pergScritStr(q9, "q9");   
    let q10script = pergScritStr(q10, "q10");
    let q11script = pergScritStr(outros, "q11");
    let q12script = pergScritStr(q12, "q12");
    let q13script = pergScritStr(q13, "q13");
    let q15script = pergScritStr(q15, "q15");    
    let q15_1script = pergScritStr(q15_1, "q15_1");
    let q16script = pergScritStr(q16, "q16");    
    let q16_1script = pergScritStr(q16_1, "q16_1");
    let q7Choose = q7C ? "Local" : "Geral";
    let rowTable = funcRowTable(q5Exame, q5Valor, q5data);

    
    let content = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Historico Enfermagem ${nomePaciente.value}</title>
    <style>
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    padding: 20px;
}

.head {
    height: 110px;
    overflow: hidden;
}

.logo {
    float: left;
    width: calc(50% - 10px);
    border: 1px black solid;
    height: 100%;
    position: relative;
}

.logo img {
    height: 100px;
    position: absolute;
    top: 5%;
    left: 25%;
    transform: translate(-50%, -50%);
}

.text-head {
    float: right;
    width: calc(50% - 10px);
    height: 100%;
    border: 1px black solid;
    position: relative;
}
.text-head h4{
    position: absolute;
      top: 40%;
      left: 18%;
      transform: translate(-50%, -50%);
}

.first-box {
    margin-top: 15px;
    border: solid 1px black;
    padding: 10px;
    overflow: hidden;
}

.cabecalho {
    width: calc(80% - 10px);
    float: left;
    overflow: hidden;
}

.infos-box {
    overflow: hidden;
}

.left-info,
.right-info {
    float: left;
    width: 50%;
}

.left-info div,
.right-info div {
    margin-top: 20px;
}

.aside-box {
    width: calc(20% - 10px);
    float: right;
    border-left: solid 1px black;
    padding: 0 10px;
    overflow: hidden;
}

.aside-box ul {
    text-decoration: none;
    list-style: none;
}

ul li {
    margin-bottom: 5px;
    margin-top: 5px;
    overflow: hidden;
}

.doctor-info {
    overflow: hidden;
    width: 800px;
    margin: 15px 0;
}

.box-docName {
    width: 70%;
    float: left;
}

.box-crm,
.box-spec {
    width: 30%;
    float: left;
}

.box-spec{
    margin-top: 10px;
}

.question {
    margin: 20px 0;
    overflow: hidden;
}

.q {
    font-weight: bold;
    width: auto;
    float: left;
    margin-right: 10px;
}
.text-med{    
    clear: left;
}

.text-med p {
    text-decoration: underline;
    text-underline-offset: 6px;
    display: inline-block;
    line-height: 25px;
}

#table-q5 {
    border-collapse: collapse;
    width: 100%;
}

#table-q5 th,
#table-q5 td {
    border: #000 1px solid;
    text-align: center;
    padding: 6px;
}

th:nth-child(1),
td:nth-child(1) {
    width: 33%;
}

th:nth-child(2),
td:nth-child(2) {
    width: 33%;
}

th:nth-child(3),
td:nth-child(3) {
    width: 33%;
}

.q7,
.q8,
.q9,
.q10,
.q11,
.q12,
.q13,
.q14,
.q15,
.q16,
.q17,
.q18 {
    overflow: hidden;
    margin: 10px 0;
}

.box-q11 {
    overflow: hidden;
    margin-top: 10px;
}

.q12,
.q15,
.q16 {
    width: 100%;
    float: left;
    margin-top: 10px;
}

.q12 .q,
.q15 .q,
.q16 .q {
    width: 100%;
    float: left;
}

#qan, .qan {
    clear: left;
}

.rad-choose{
    margin-right: 25px;
    margin-bottom: 5px;
}
    </style>
     
</head>
<body>
    <div class="head">
        <div class="logo">
            <img src="../src/img/logo.png" alt="logo">
        </div>
        <div class="text-head">            
            <h4>HISTÓRICO DE ENFERMAGEM</h4>
        </div>
    </div>

    <div class="first-box">
        <div class="cabecalho">
            <div class="name-box">
                <span>Nome Completo: </span>
                <span>${nomePaciente.value}</span>
            </div>
    
            <div class="infos-box">
                <div class="left-info">
                    <div class="birthDay">
                        <span>Data de Nascimento:</span>
                        <span id="birthDayAns">${converterData(dataNascimento.value)}</span>                     
                    </div>
    
                    <div class="weight">
                        <span>Peso:</span>
                        <span id="weightAns">${pesoPaciente.value} kg</span>
                    </div>
    
                    <div class="proced">
                        <span>Procedimento:</span>
                        <span id="procedAns">${procedimento.value}</span>
                    </div>
    
                    <div class="date">
                        <span>Data:</span>
                        <span id="dateAns">${converterData(dataExame.value)}</span>
                    </div>
                </div>
    
                <div class="right-info">
                    <div class="age">
                        <span>Idade: </span>
                        <span id="ageAns">${idadePaciente.value}</span>
                    </div>
    
                    <div class="height">
                        <span>Altura:</span>
                        <span id="heightAns">${alturaPaciente.value}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="aside-box">
            <ul>
                <li>
                    <span>Exame:</span>
                    <span id="exameNumber">${exame.value}</span>
                </li>

                <li>
                    <span>Hora:</span>
                    <span id="time">${horaExame.value}</span>
                </li>

                <li>
                    <span>PA:</span>
                    <span id="pa">${paExame.value}</span>
                </li>

                <li>
                    <span>FC:</span>
                    <span id="fc">${fcExame.value}</span>
                </li>

                <li>
                    <span>FR:</span>
                    <span id="fr">${frExame.value}</span>
                </li>

                <li>
                    <span>SPO2:</span>
                    <span id="spo2">${spoExame.value}</span>
                </li>

                <li>
                    <span>TAX:</span>
                    <span id="tax">${taxExame.value}</span>
                </li>
            </ul>
        </div>
    </div>

    <div class="doctor-info">
        <div class="box-docName">
            <span>Médico Solicitante: </span>
            <span id="doc-name">${medicoSolicitante.value}</span>
        </div>

        <div class="box-crm">
            <span>CRM:</span>
            <span id="crm">
                ${crm.value}
            </span>
        </div>

        <div class="box-spec">
            <span>Especialidade</span>
            <span id="area">
                ${especialidade.value}
            </span>
        </div>        
    </div>

    <div class="questions">
        <div class="q1 question">
            <span class="q" style="width: 320px;">1. Qual o motivo da solicitação do exame:</span>
            <span id="an1">
                ${q1.value}
            </span>
        </div>

        <div class="q2 question">
            <span class="q" style="width: 210px;">2. Qual a principal queixa?</span>
            <span id="an2" style="width: calc(100% - 220px);">${q2.value}</span>
        </div>

        <div class="q2#" >
            <span class="q">Há quanto tempo: </span>
            <span id="an2#">${q2QntTempo.value} anos</span>
        </div>

        <div class="q3 question" style="flex-direction: column; align-items: start;">
            <span class="q">3. Quais os medicamentos de uso contínuo</span>
            <div class="text-med">
                <p>${q3.value}</p>
            </div>
        </div>

        <div class="q4 question">
            <div>
                <span class="q">4. Está em Jejum?</span>
                <span id="an4">${textq4}</span>
            </div>            
            
        </div>

        <div class="q5 tab">
            <span class="q">5. Exames Laboratoriais:</span>

            <table id="table-q5">
                <tr>
                    <th>Exames</th>
                    <th>Valores</th>
                    <th>Data</th>
                </tr>               

                ${rowTable}

            </table>
        </div>

        <div class="q6 question" style="flex-direction: column; align-items: start; gap: 5px;">
            <span class="q">6. Exames prévios da área em estudo:</span>
            <div class="q6Inner">
                <span style="font-weight: bold;">Trouxe verificação? </span></br>
                <span id="q6an">${textq6}</span>
                
            </div>
        </div>

        <div class="question q7">
            <div class="q">7. Será realizado algum tipo de anestesia?</div>
            <div id="qan">${textq7}</div>
            
        </div>
        <div class="q8 question">
            <div class="q">8. Já realizou alguma cirurgia na área em estudo?</div>
            <div id="qan">${textq8}</div>
            
        </div>
        <div class="q9 question">
            <div class="q">9. Já realizou alguma outra cirurgia?</div>
            <div id="qan">${textq9}</div>
           
        </div>
        <div class="q10 question">
            <div class="q">10. Já realizou Quimioterapia?</div>
            <div id="qan">${textq10}</div>
            
        </div>
        <div class="q11 question">
            <span class="q">11. É portador de alguma enfermidade conhecida?</span>
          
            <div class="box-q11 qan">
                <span class="rad-choose">
                    <span id="hipertensao">(${textq11Hipertensao})</span>
                    <span>Hipertensão</span>
                </span>

                <span class="rad-choose">
                    <span id="cardiopatias">(${textq11Cardiopatias})</span>
                    <span>Cardiopatias</span>
                </span>

                <span class="rad-choose">
                    <span id="diabetes">(${textq11Diabetes})</span>
                    <span>Diabetes</span>
                </span>

                <span class="rad-choose">
                    <span id="insuficienciaRenal">(${textq11Insurenal})</span>
                    <span>Insuficiencia Renal</span>
                </span>

                <span class="rad-choose">
                    <span id="anemiaFalciforme">(${textq11AnemiaFalci})</span>
                    <span>Anemia Falciforme</span>
                </span>

                <span class="rad-choose">
                    <span id="mieloMultiplo">(${textq11Mieloma})</span>
                    <span>Mielo Mútiplo</span>
                </span>

                <span class="rad-choose">
                    <span id="asma">(${textq11Asma})</span>
                    <span>Asma</span>
                </span>

                <span class="rad-choose">
                    <span id="rinite">(${textq11Rinite})</span>
                    <span>Rinite</span>
                </span>

                <span class="rad-choose">
                    <span id="outros">(${textq11Outros})</span>
                    <span>Outros:</span>
                </span>
            </div>
           
            
        </div>

        <div class="q12 question">
            <div class="q">12. Possui algum tipo de alergia medicamentosa ou alimentar (iodo, camarão, ovo, entre outros)?</div>
            <div id="qan">${textq12}</div>
            
        </div>

        <div>
            <div class="q">13. Tabagista?</div>
            <div id="qan">${textq13}</div>
           
        </div>

        <div class="q14 question">
            <div class="q">14. Já fez tratamento para tuberculose?</div>
            <div id="qan">${textq14}</div>
            
        </div>

        <div class="q15 question">
            <div class="q">15. Já realizou Cineagicoronariografia e/ou Angioplastia Coronária anteriormente?</div>
            <div id="qan">${textq15}</div>     

        </div>

        <div class="q16 question">
            <div class="q">16. Já realizou algum tipo de exame com uso de contrastante iodado (TC, Cateterismo Cardiado ou Urografia Excretora)?</div>
            <div id="qan">${textq16}</div>
            

            
        </div>

        
        <div class="q" style="font-size: 20px;">
            Exclusivo para o sexo feminino
        </div>

        <div class="q17 question">
            <div class="q">17. Existe alguma possibilidade de estar grávida?</div>
            <div id="qan">${textq17}</div>
            
        </div>

        <div class="q18 question">
            <div class="q">18. Está Amamentando? </div>
            <div id="qan">${textq18}</div>
            
        </div>
    </div>

    <div class="assEntrevistador" style="margin-top: 80px;">
        <span>Assinatura do entrevistador:</span>
        <span>___________________________________________</span>
    </div>
    <script>

        ${q4script}
        if(q4){
            document.querySelector(".q4").innerHTML += "<div><span class='q'><strong>Desde que horarios?</strong> Desde às </span> <span id='time-fasting'>${q4Desde.value}</span></div>"
        }

        ${q6script}
        
        if(q6){
            document.querySelector(".q6Inner").innerHTML += "<div class='inf-q' style='margin-top: 5px;'><span style='font-weight: bold;'>Quais:</span> <span id='ans-inf' style='word-wrap: reak-word; overflow: hidden; text-overflow: ellipsis; max-width: 1200px;'>${q6Quais.value}</span></div>"        
        }

        ${q7script}

        if(q7){
            document.querySelector(".q7").innerHTML += '<div class="inf-q"><span><strong>Qual:</strong> ${q7Choose}</span><span id="ans-inf"></span></div>'
        }

        ${q8script}

        if(q8){
            document.querySelector(".q8").innerHTML += '<div class="inf-q"><span><strong>Qual:</strong> ${q8Qual.value}:</span><span id="ans-inf"></span></div>'
        }

        ${q9script}

        if(q9){
            document.querySelector(".q9").innerHTML += '<div class="inf-q"><span> <strong> Qual: </strong> </span><span id="ans-inf">${q9Qual.value}</span></div>'
        }

        ${q10script}

        if(q10){
            document.querySelector(".q10").innerHTML += '<div class="inf-q"><span><strong>Qual: </strong></span><span id="ans-inf">${q10Tempo.value}</span></div>'
        }

        ${q11script}

        
        if(q11){
            document.querySelector(".q11").innerHTML +=  "<div class='inf-q' style='margin-top: 5px;'><span style='font-weight: bold;'><strong>Quais:</strong></span> <span id='ans-inf' style='word-wrap: reak-word; overflow: hidden; text-overflow: ellipsis; max-width: 1200px;'>${q11Quais.value}</span></div>"        
        }

        ${q12script}

        if(q12){
            
            document.querySelector(".q12").innerHTML += '<div class="inf-q"><span><strong>Qual:</strong></span><span id="ans-inf">${q12Qual.value}</span></div>'
        }

        ${q13script}

        if(q13){
            document.querySelector(".q13").innerHTML += '<div class="inf-q"><span><strong>Obs:</strong></span><span id="ans-inf">${q13Obs.value}</span></div>'
        }

        ${q15script}
        
       
        if(q15){
            document.querySelector(".q15").innerHTML += '<div class="obsq15" style="margin-top: 5px;"><span class="q">Aconteceu alguma intercorrência?</span><span id="obsans15">${textq15_1}</span></div>'
        }

        ${q15_1script}

        if(q15_1){
            document.querySelector(".q15").innerHTML += '<div class="inf-q"><span><strong>Qual:</strong></span><span id="ans-inf">${q15_1Quais.value}</span></div>'
        }

        ${q16script}

        if(q15){
            document.querySelector(".q16").innerHTML += '<div class="obsq16" style="margin-top: 5px;"><div class="q">Aconteceu alguma intercorrência?</div><div id="qan">${textq16_1}</div></div>'
        }

        ${q16_1script}

        if(q16_1){
            document.querySelector(".q16").innerHTML += '<div class="inf-obs"><span>Qual:</span><span id="ans-inf-obs">${q16_1Quais}</span></div>' 
        }
        
    
    </script>
</body>
</html>`

    return content
}