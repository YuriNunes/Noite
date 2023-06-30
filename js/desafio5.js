function verificaPalavra(){
    const quintaResposta = document.getElementById("desafio5").value
    const respostaCorreta5 = "Morta"

    if(quintaResposta.includes(respostaCorreta5)){
        window.location.href="../desafio-6.html"
    } else{
        window.location.href="../morreu.html"
    }
}