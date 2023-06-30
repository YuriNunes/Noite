function verificaPalavra(){
    const segundaResposta = document.getElementById("desafio2").value
    const respostaCorreta2 = "Nunca mais"

    if(segundaResposta.includes(respostaCorreta2)){
        window.location.href="../desafio-3.html"
    } else{
        window.location.href="../morreu.html"
    }
}