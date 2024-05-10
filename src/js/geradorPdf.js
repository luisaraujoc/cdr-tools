btn = document.getElementById("btn-salvar");

btn.addEventListener("click", (e) =>{
    e.preventDefault();
    const win = window.open("", "", "height=800, width=1100");
    let novaTelaConteudo = htmlToprint();
    win.document.write(novaTelaConteudo);
  
    
    const timer = setTimeout(() => {
        var html = win.document.documentElement.outerHTML;
        
        fetch('http://localhost:3000/api/enviar', {
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
    
    
})
/*
btn.addEventListener("click", ()=>{
    fetch('http://localhost:3000/api/enviar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(informacao),
      })
      .then(response => response.text())
      .then(data => {
        console.log('Resposta do servidor:', data);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
    
})

*/

