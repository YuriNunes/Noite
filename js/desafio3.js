function verificaPalavra(){
    const terceiraResposta = document.getElementById("desafio3").value
    const respostaCorreta3 = "Reze"

    if(terceiraResposta.includes(respostaCorreta3)){
        window.location.href="../desafio-4.html"
    } else{
        window.location.href="../morreu.html"
    }
}