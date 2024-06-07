
btn = document.getElementById("btn-salvar");
btnTomografia = document.getElementById("btnSalvarTomografia");
var popUpSucess;
if (btn != null) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const win = window.open("", "", "height=800, width=1100");
    let novaTelaConteudo = htmlToprint();
    win.document.write(novaTelaConteudo);
    let loader = document.getElementById("loading");
    loader.style.display = "block";
    document.body.style.overflow = 'hidden';


    const timer = setTimeout(() => {
      var html = win.document.documentElement.outerHTML;
      fetch('http://localhost:3000/api/hitoricoEnfermagem/enviar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ html: html.toString(), filename: JSON.stringify(generateFileName()) }),
      })
        .then(response => response.json()) // Agora esperamos um JSON em vez de texto
        .then(data => {
          if (data.boo) {
            document.getElementById("popupSuc").style.display = "flex";
          }
        })
        .catch((error) => {
          console.log('Erro:', error);
          document.getElementById("popupFail").style.display = "flex";
        });
    }, 1000);

    win.document.close();
    win.close();

  })
}
if (btnTomografia != null) {
  btnTomografia.addEventListener("click", (e) => {
    e.preventDefault();
    const win = window.open("", "", "height=800, width=1100");
    let novaTelaConteudo = htmlToprint();
    win.document.write(novaTelaConteudo);
    let loader = document.getElementById("loading");
    loader.style.display = "block";
    document.body.style.overflow = 'hidden';


    const timer = setTimeout(() => {
      var html = win.document.documentElement.outerHTML;
      fetch('http://localhost:3000/api/tomografia/enviar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ html: html.toString(), filename: JSON.stringify(generateFileName()) }),
      })
        .then(response => response.json()) // Agora esperamos um JSON em vez de texto
        .then(data => {
          if (data.boo) {
            document.getElementById("popupSuc").style.display = "flex";
          }
        })
        .catch((error) => {
          console.log('Erro:', error);
          document.getElementById("popupFail").style.display = "flex";
        });
    }, 1000);

    win.document.close();
    win.close();

  })
}


