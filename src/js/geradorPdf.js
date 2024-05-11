
btn = document.getElementById("btn-salvar");
var popUpSucess;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const win = window.open("", "", "height=800, width=1100");
  let novaTelaConteudo = htmlToprint();
  win.document.write(novaTelaConteudo);


  const timer = setTimeout(() => {
    var html = win.document.documentElement.outerHTML;
    //https://1436-2804-d47-5c7a-1400-8060-9046-d9fe-5892.ngrok-free.app
    fetch('https://d51e-45-165-236-142.ngrok-free.app/api/enviar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ html: html.toString() }),
    })
      .then(response => response.json()) // Agora esperamos um JSON em vez de texto
      .then(data => {
        if(data.boo){
          document.getElementById("popupSuc").style.display = "flex";
        }
      })
      .catch((error) => {
        console.error('Erro:', error);
        document.getElementById("popupFail").style.display = "flex";
      });
  }, 1000);

  win.document.close();
  win.close();

  
})


