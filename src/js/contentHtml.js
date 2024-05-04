const htmlToprint = () => {
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

    content = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Historico Enfermagem</title>
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
                        <span id="birthDayAns">${dataNascimento.value}</span>                     
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
                        <span id="dateAns">${dataExame.value}</span>
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
                Resposta qualquer a qualquer pergunta
            </span>
        </div>

        <div class="q2 question">
            <span class="q" style="width: 210px;">2. Qual a principal queixa?</span>
            <span id="an2" style="width: calc(100% - 220px);">Dor na região lombar com dor</span>
        </div>

        <div class="q2#" >
            <span class="q">Há quanto tempo: </span>
            <span id="an2#">2 anos</span>
        </div>

        <div class="q3 question" style="flex-direction: column; align-items: start;">
            <span class="q">3. Quais os medicamentos de uso contínuo</span>
            <div class="text-med">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis</p>
            </div>
        </div>

        <div class="q4 question">
            <div>
                <span class="q">4. Está em Jejum?</span>
                <span id="an4">(x) sim ( ) Não</span>
            </div>
            
            <div>
                <span class="q">Desde que horarios? Desde às </span>
                <span id="time-fasting">15:00</span>
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

                <tr>
                    <td>asdsadd</td>                    
                    <td>asdsadd</td>                    
                    <td>asdsadd</td>
                </tr>

                <tr>
                    <td>asdsadd</td>                    
                    <td>asdsadd</td>                    
                    <td>asdsadd</td>
                </tr>

                <tr>
                    <td>asdsadd</td>                    
                    <td>asdsadd</td>                    
                    <td>asdsadd</td>
                </tr>

            </table>
        </div>

        <div class="q6 question" style="flex-direction: column; align-items: start; gap: 5px;">
            <span class="q">6. Exames prévios da área em estudo:</span>
            <div>
                <span style="font-weight: bold;">Trouxe verificação? </span>
                <span id="q6an">( )Sim (x)Não</span>
                <div class="inf-q" style="margin-top: 5px;">
                    <span style="font-weight: bold;">Quais:</span>
                    <span id="ans-inf" style="word-wrap: reak-word; overflow: hidden; text-overflow: ellipsis; max-width: 1200px;">asficcia, cardiologia, favascript, faca, que viaje e outros</span>
                </div>
            </div>
        </div>
        <div class="question q7">
            <span class="q">7. Será realizado algum tipo de anestesia?</span>
            <span id="q7an">( )Sim (x)Não</span>
            <div class="inf-q">
                <span>Qual:</span>
                <span id="ans-inf"></span>
            </div>
        </div>
        <div class="q8 question">
            <span class="q">8. Já realizou alguma cirurgia na área em estudo?</span>
            <span id="q8an">( )Sim (x)Não</span>
            <div class="inf-q">
                <span>Qual:</span>
                <span id="ans-inf"></span>
            </div>
        </div>
        <div class="q9 question">
            <span class="q">9. Já realizou alguma outra cirurgia?</span>
            <span id="q9an">( )Sim (x)Não</span>
            <div class="inf-q">
                <span>Qual:</span>
                <span id="ans-inf"></span>
            </div>
        </div>
        <div class="q10 question">
            <span class="q">10. Já realizou Quimioterapia?</span>
            <span id="q10an">( )Sim (x)Não</span>
            <div class="inf-q">
                <span>Qual:</span>
                <span id="ans-inf"></span>
            </div>
        </div>
        <div class="q11 question">
            <span class="q">11. É portador de alguma enfermidade conhecida?</span>
            <div class="box-q11">
                <div>
                    <span id="hipertensao">( )</span>
                    <span>Hipertensão</span>
                </div>

                <div>
                    <span id="cardiopatias">( )</span>
                    <span>Cardiopatias</span>
                </div>

                <div>
                    <span id="insuficienciaRenal">( )</span>
                    <span>Insuficiencia Renal</span>
                </div>

                <div>
                    <span id="anemiaFalciforme">( )</span>
                    <span>Anemia Falciforme</span>
                </div>

                <div>
                    <span id="mieloMultiplo">( )</span>
                    <span>Mielo Mútiplo</span>
                </div>

                <div>
                    <span id="asma">( )</span>
                    <span>Asma</span>
                </div>

                <div>
                    <span id="rinite">( )</span>
                    <span>Rinite</span>
                </div>

                <div>
                    <span id="outros">( )</span>
                    <span>Outros:</span>
                </div>
            </div>
        </div>

        <div class="q12 question">
            <span class="q">12. Possui algum tipo de alergia medicamentosa ou alimentar (iodo, camarão, ovo, entre outros)?</span>
            <span id="q12an">( )Sim (x)Não</span>
            <div class="inf-q">
                <span>Qual:</span>
                <span id="ans-inf"></span>
            </div>
        </div>

        <div class="q13 question">
            <span class="q">13. Tabagista?</span>
            <span id="q13an">( )Sim (x)Não</span>
            <div class="inf-q">
                <span>Obs:</span>
                <span id="ans-inf"></span>
            </div>
        </div>

        <div class="q14 question">
            <span class="q">14. Já fez tratamento para tuberculose?</span>
            <span id="q14an">( )Sim (x)Não</span>
            <div class="inf-q">
                <span>Qual:</span>
                <span id="ans-inf"></span>
            </div>
        </div>

        <div class="q15 question">
            <span class="q">15. Já realizou Cineagicoronariografia e/ou Angioplastia Coronária anteriormente?</span>
            <span id="q14an">( )Sim (x)Não</span>
            <div class="inf-q">
                <span>Qual:</span>
                <span id="ans-inf"></span>
            </div>

            <div class="obsq15">
                <span class="q">Aconteceu alguma intercorrência?</span>
                <span id="obsans15">( )Sim (x)Não</span>
            </div>
        </div>

        <div class="q16 question">
            <span class="q">16. Já realizou algum tipo de exame com uso de contrastante iodado (TC, Cateterismo Cardiado ou Urografia Excretora)?</span>
            <span id="q14an">( )Sim (x)Não</span>
            <div class="inf-q">
                <span>Qual:</span>
                <span id="ans-inf"></span>
            </div>

            <div class="obsq16">
                <span class="q">Aconteceu alguma intercorrência?</span>
                <span id="obsans15">( )Sim (x)Não</span>

                <div class="inf-obs">
                    <span>Qual:</span>
                    <span id="ans-inf-obs"></span>
                </div>
            </div>
        </div>

        <div style="height: 0.5px; width: 100vw; background-color: rgb(255, 255, 255); margin-bottom: 20px; border: solid black 1px;">

        </div>
        <div class="q" style="font-size: 20px;">
            Exclusivo para o sexo feminino
        </div>

        <div class="q17 question">
            <span class="q">17. Existe alguma possibilidade de estar grávida?</span>
            <span id="q15an">( )Sim (x)Não</span>
            <div class="inf-q">
                <span>Qual:</span>
                <span id="ans-inf"></span>
            </div>
        </div>

        <div class="q18 question">
            <span class="q">18. Está Amamentando? </span>
            <span id="q14an">( )Sim (x)Não</span>
            <div class="inf-q">
                <span>Qual:</span>
                <span id="ans-inf"></span>
            </div>
        </div>
    </div>

    <div class="assEntrevistador" style="margin-top: 80px;">
        <span>Assinatura do entrevistador:</span>
        <span>___________________________________________</span>
    </div>

</body>
</html>`

    return content
}