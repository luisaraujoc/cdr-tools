
const htmlToShow = () => {

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
    let q16 = q16selected;    
    let q16_1 = q16_1selected;
    let q16_1Quais = document.getElementById("intercorrenciaText16")
    let q15_1Quais = document.getElementById("intercorrenciaText")
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
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    body{
        padding: 20px;
    }
    .head{
        display: flex;
        align-items: stretch;
        
        height: 110px;
    }
    .logo{
        flex: 1.5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px black solid;
    }
    .logo img{
        height: 100px;
    }
    .text-head{    
        border: 1px black solid;
        height: 100%;
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .first-box{
        display: flex;
        margin-top: 15px;
        border: solid 1px black;
        
        padding: 10px;
    }
    
    .cabecalho{
        flex: 2.5;
    }
    
    .infos-box{
        display: flex;
        gap: 100px;
    }
    
    .left-info div{
        margin-top: 20px;
    }
    
    .right-info div{
        margin-top: 20px;
    }
    
    .aside-box{
        flex: .5;    
        border-left: solid 1px black;
        padding: 0 10px;
    }
    
    .aside-box ul{
        text-decoration: none;
        list-style: none;
    }
    ul li{
            margin-bottom: 5px;
            margin-top: 5px;
    }
    
    .doctor-info{
        display: flex;
        flex-wrap: wrap;
        width: 800px;
        
        margin: 10px 0;
    }
    
    .box-docName{
        width: 80%;
    }
    
    .box-crm{    
        width: 20%;
    }
    
    .box-spec{
        margin-top: 10px;
    }
    
    .question{
        display: flex;
        gap: 15px;
        margin: 20px 0;
        align-items: center;
        page-break-inside: avoid;
    }
    
    .q{
        font-weight: bold;
        width: 400px;
    }
    
    .text-med p{
        text-decoration: underline;
        text-underline-offset: 6px;
        display: inline-block;
        line-height: 25px;
    }
    
    #table-q5{
        border-collapse: collapse;
        width: 800px;
    }
    #table-q5 th, #table-q5 td{
        border: #000 1px solid;
        text-align: center;
        padding: 6px;
    }
    
    th:nth-child(1),
            td:nth-child(1) {
                width: 350px;
            }
    
            th:nth-child(2),
            td:nth-child(2) {
                width: 350px;
            }
    
            th:nth-child(3),
            td:nth-child(3) {
                width: 100px;
            }
    
    .q7, .q8, .q9, .q10, .q11, .q12, .q13, .q14, .q15, .q16, .q17, .q18{
        flex-direction: column;
        align-items: start;
        gap: 5px;
    }
    
    .box-q11{
        display: flex;
        flex-wrap: wrap;
        width: 650px;
        gap: 8px;
    }
    
    .q12, .q15, .q16{
        width: 800px;
    }
    
    .q12 .q, .q15 .q, .q16 .q{
        width: 100%;
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
            <span id="an2#">${q2QntTempo.value}</span>
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
                <span style="font-weight: bold;">Trouxe verificação? </span>
                <span id="q6an">${textq6}</span>
                
            </div>
        </div>
        <div class="question q7">
            <span class="q">7. Será realizado algum tipo de anestesia?</span>
            <span id="q7an">${textq7}</span>
            
        </div>
        <div class="q8 question">
            <span class="q">8. Já realizou alguma cirurgia na área em estudo?</span>
            <span id="q8an">${textq8}</span>
            
        </div>
        <div class="q9 question">
            <span class="q">9. Já realizou alguma outra cirurgia?</span>
            <span id="q9an">${textq9}</span>
           
        </div>
        <div class="q10 question">
            <span class="q">10. Já realizou Quimioterapia?</span>
            <span id="q10an">${textq10}</span>
            
        </div>
        <div class="q11 question">
            <span class="q">11. É portador de alguma enfermidade conhecida?</span>
          
            <div class="box-q11">
                <div>
                    <span id="hipertensao">(${textq11Hipertensao})</span>
                    <span>Hipertensão</span>
                </div>

                <div>
                    <span id="cardiopatias">(${textq11Cardiopatias})</span>
                    <span>Cardiopatias</span>
                </div>

                <div>
                    <span id="diabetes">(${textq11Diabetes})</span>
                    <span>Diabetes</span>
                </div>

                <div>
                    <span id="insuficienciaRenal">(${textq11Insurenal})</span>
                    <span>Insuficiencia Renal</span>
                </div>

                <div>
                    <span id="anemiaFalciforme">(${textq11AnemiaFalci})</span>
                    <span>Anemia Falciforme</span>
                </div>

                <div>
                    <span id="mieloMultiplo">(${textq11Mieloma})</span>
                    <span>Mielo Mútiplo</span>
                </div>

                <div>
                    <span id="asma">(${textq11Asma})</span>
                    <span>Asma</span>
                </div>

                <div>
                    <span id="rinite">(${textq11Rinite})</span>
                    <span>Rinite</span>
                </div>

                <div>
                    <span id="outros">(${textq11Outros})</span>
                    <span>Outros:</span>
                </div>
            </div>
           
            
        </div>

        <div class="q12 question">
            <span class="q">12. Possui algum tipo de alergia medicamentosa ou alimentar (iodo, camarão, ovo, entre outros)?</span>
            <span id="q12an">${textq12}</span>
            
        </div>

        <div class="q13 question">
            <span class="q">13. Tabagista?</span>
            <span id="q13an">${textq13}</span>
           
        </div>

        <div class="q14 question">
            <span class="q">14. Já fez tratamento para tuberculose?</span>
            <span id="q14an">${textq14}</span>
            
        </div>

        <div class="q15 question">
            <span class="q">15. Já realizou Cineagicoronariografia e/ou Angioplastia Coronária anteriormente?</span>
            <span id="q14an">${textq15}</span>     

        </div>

         <div class="q16 question">
            <div class="q">16. Já realizou algum tipo de exame com uso de contrastante iodado (TC, Cateterismo Cardiado ou Urografia Excretora)?</div>
            <div id="qan">${textq16}</div>
          
        </div>

        <div style="height: 0.5px; width: 100vw; background-color: rgb(255, 255, 255); margin-bottom: 20px; border: solid black 1px;">

        </div>
        <div class="q" style="font-size: 20px;">
            Exclusivo para o sexo feminino
        </div>

        <div class="q17 question">
            <span class="q">17. Existe alguma possibilidade de estar grávida?</span>
            <span id="q15an">${textq17}</span>
            
        </div>

        <div class="q18 question">
            <span class="q">18. Está Amamentando? </span>
            <span id="q14an">${textq18}</span>
            
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
            document.querySelector(".q15").innerHTML += '<div class="obsq15"><span class="q">Aconteceu alguma intercorrência?</span><span id="obsans15">${textq15_1}</span></div>'
        }

        ${q15_1script}

        if(q15_1){
            document.querySelector(".q15").innerHTML += '<div class="inf-q"><span><strong>Qual:</strong></span><span id="ans-inf">${q15_1Quais.value}</span></div>'
        }
        ${q16script}

        if(q16){
            document.querySelector(".q16").innerHTML += '<div class="obsq16" style="margin-top: 5px;"><div class="q">Aconteceu alguma intercorrência?</div><div id="qan">${textq16_1}</div></div>'
        }

        ${q16_1script}

        if(q16_1){
            document.querySelector(".q16").innerHTML += '<div class="inf-obs"><span><strong>Qual:</strong></span><span id="ans-inf-obs">${q16_1Quais.value}</span></div>' 
        }
    
    </script>
</body>
</html>`

    return content
}