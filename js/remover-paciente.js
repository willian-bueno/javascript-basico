var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", (event) => {
    var linha = event.target.parentNode;
    linha.classList.add("fadeOut");
    setTimeout(() => {
        linha.remove()
    }, 500);
});