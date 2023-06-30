const retornaInicio = document.querySelector("[data-retorno]")

function voltaInicio() {
    window.location.href="../index.html"
}

retornaInicio.addEventListener("click", () => voltaInicio())