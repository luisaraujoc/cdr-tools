btn = document.getElementById("btn-salvar");

btn.addEventListener("click", (e) =>{
    e.preventDefault();
    const win = window.open("", "", "height=800, width=1100");
    win.document.write(htmlToprint());
    const timer = setTimeout(() => {
        win.print()
        win.document.close();
        win.close();
        console.log(crm.value)
    }, 500);   
})
