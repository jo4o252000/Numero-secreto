function verificaSeOChuteEValido(chute){
    const numero = +chute

    if(Number.isNaN(numero)){
       elementoChute.innerHTML += `<div>Valor invalido</div>`
       return
    }
    if(numeroMaiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML += `O numero tem que ser entre ${menorValor} e ${maiorValor}`
        return
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Parabéns, Você acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
            <button id= "jogarNovamente" class = "btn-jogar">Jogar novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div> -->
        `
    }else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div> -->
        `
    }
}

function numeroMaiorOuMenorQuePermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogarNovamente'){
        window.location.reload()
    }
})