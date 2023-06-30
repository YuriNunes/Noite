const voltaInicio = document.querySelector("[data-inicio]")
const desenvolvedor = document.querySelector("[data-desenvolvedor]")

function inicio(){
    window.location.href="../index.html"
}

function desenvolvedorExterno(){
    window.location.href="https://portifolio-pi-lilac.vercel.app/"
}

voltaInicio.addEventListener("click", () => inicio())

desenvolvedor.addEventListener("click", () => desenvolvedorExterno())