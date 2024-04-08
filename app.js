function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if(de >= ate){
        reiniciar();
        alert("Numero 'de' Não pode ser maior que o 'ate' ");
        return;
    }

    if((ate - de + 1) < quantidade ){ 
        alert (" Intervalo indiponível")
        return;
    }

    let sorteados = numeroAleatorio(quantidade, de, ate);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`
    trocarStatus();
}

function numeroAleatorio(quantidade, de, ate){
    let resultado = [];

    for(let i=0; i < quantidade; i++) {
        numero = Math.floor(Math.random() * (ate - de + 1)) + de;

        while(resultado.includes(numero)){
        numero = Math.floor(Math.random() * (ate - de + 1)) + de;
        }
        
        resultado.push(numero);
    }

    return resultado;
}

function trocarStatus() {
    let botaoReiniciar = document.getElementById('btn-reiniciar')
    let botaoSortear = document.getElementById('btn-sortear')
    if(botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }

    if(botaoSortear.classList.contains('container__botao')) {
        botaoSortear.classList.add('container__botao-desabilitado');
        botaoSortear.classList.remove('container__botao');
    } else {
        botaoSortear.classList.add('container__botao');
        botaoSortear.classList.remove('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'

    trocarStatus();
}