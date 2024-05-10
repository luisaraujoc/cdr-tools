
btn = document.getElementById("btn-salvar");

btn.addEventListener("click", (e) =>{
    e.preventDefault();
    const win = window.open("", "", "height=800, width=1100");
    let novaTelaConteudo = htmlToprint();
    win.document.write(novaTelaConteudo);
  
    
    const timer = setTimeout(() => {
        var html = win.document.documentElement.outerHTML;
        
        fetch('https://1436-2804-d47-5c7a-1400-8060-9046-d9fe-5892.ngrok-free.app/api/enviar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({html: html.toString()}),
      })
      .then(response => response.text())
      .then(data => {
        console.log('Resposta do servidor:', data);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
        
    }, 1000);  
    
    win.document.close();
    win.close();
})


