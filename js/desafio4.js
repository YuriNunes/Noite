function verificaPalavra(){
    const quartaResposta = document.getElementById("desafio4").value
    const respostaCorreta4 = "Nunca mais"

    if(quartaResposta.includes(respostaCorreta4)){
        window.location.href="../desafio-5.html"
    } else{
        window.location.href="../morreu.html"
    }
}