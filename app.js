function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = numeroAleatorio(quantidade, de, ate);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`
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
