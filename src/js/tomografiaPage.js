// seta a data de preenchimento do formulário como a data atual
document.getElementById('DataPreenchimento').setAttribute('value', new Date().toISOString().substring(0, 10));