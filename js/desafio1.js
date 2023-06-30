function verificaPalavra(){
    const primeiraResposta = document.getElementById("desafio1").value
    const respostaCorreta1 = "Mellon"

    if(primeiraResposta.includes(respostaCorreta1)){
        window.location.href="../desafio-2.html"
    } else{
        window.location.href="../morreu.html"
    }
}