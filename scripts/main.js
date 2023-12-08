
let botoesNumeros = document.querySelectorAll(".botaoNumero");

let textoErro = document.querySelector("h3")

let btSoma = document.getElementById("btSoma");
let btSubtracao = document.getElementById("btSubtracao");
let btMultiplicacao = document.getElementById("btMultiplicacao");
let btDivisao = document.getElementById("btDivisao");


let btPonto = document.getElementById("btPonto");
let btIgual = document.getElementById("btIgual");
let btLimpar = document.getElementById("btLimpar");


let visorNumeros = document.getElementById("visorNumeros");

let listaNumerosVisor = [];


function limparNumeros(){
    visorNumeros.value = "";
    listaNumerosVisor = [];
}


botoesNumeros.forEach(botao => {
    botao.addEventListener('click', function() {

        let valorDoBotao = botao.innerHTML;

        listaNumerosVisor.push(valorDoBotao);

        visorNumeros.value += valorDoBotao;
    });
});


function inserirElemento(botao){
    let valorBotao = botao.innerHTML;

    if(listaNumerosVisor.length > 0) {
        var ultimoItem = listaNumerosVisor[listaNumerosVisor.length - 1];

        if (['+', '-', '*', '/', '.'].includes(valorBotao) && ['+', '-', '*', '/', '.'].includes(ultimoItem)) {
            visorNumeros.value = visorNumeros.value.slice(0, -1) + valorBotao;
            listaNumerosVisor[listaNumerosVisor.length - 1] = valorBotao;
        } else {
            listaNumerosVisor.push(valorBotao);
            visorNumeros.value += valorBotao;
        }
    }
}


function calculoResultado() {
    // listaNumerosVisor for ['2', '+', '3', '*', '4'], após o join(''), expressao retornará '2+3*4'
    let expressao = listaNumerosVisor.join('');

    let resultado = eval(expressao); // Avalia a expressão matemática

    if (isNaN(resultado)) {
        textoErro.innerHTML = `It's not possible to perform the operation with this expression ${expressao}`;
        return 0;
    }

    return resultado;
}

function mostrarResultado() {
    let resultado = calculoResultado();
    visorNumeros.value = resultado;
    listaNumerosVisor = [String(resultado)]; // Atualiza a lista apenas com o resultado
}

