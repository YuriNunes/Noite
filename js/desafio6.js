function verificaPalavra(){
    const sextaResposta = document.getElementById("desafio6").value
    const respostaCorreta6 = "Matar"

    if(sextaResposta.includes(respostaCorreta6)){
        window.location.href="../saida.html"
    } else{
        window.location.href="../morreu.html"
    }
}