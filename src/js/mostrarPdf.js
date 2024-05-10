

btn = document.getElementById("btn-visualizar");

btn.addEventListener("click", (e) =>{
    e.preventDefault();
    const win = window.open("", "", "height=800, width=1100");
    win.document.write(htmlToShow());
    win.focus();
    win.document.close();
});

