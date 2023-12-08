
let bt1 = document.getElementById("bt1");
let bt2 = document.getElementById("bt2");
let bt3 = document.getElementById("bt3");
let bt4 = document.getElementById("bt4");
let bt5 = document.getElementById("bt5");
let bt6 = document.getElementById("bt6");
let bt7 = document.getElementById("bt7");
let bt8 = document.getElementById("bt8");
let bt9 = document.getElementById("bt9");
let bt0 = document.getElementById("bt0");


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


function inserirNumero(botao){
    var valorDoBotao = botao.innerHTML;

    listaNumerosVisor.push(valorDoBotao);

    visorNumeros.value += valorDoBotao;
}


function inserirElemento(botao){
    var valorBotao = botao.innerHTML;

    if(listaNumerosVisor.length > 0) {
        var ultimoItem = listaNumerosVisor[listaNumerosVisor.length - 1];

        if (['+', '-', 'X', '/', '.'].includes(valorBotao) && ['+', '-', 'X', '/', '.'].includes(ultimoItem)) {
            visorNumeros.value = visorNumeros.value.slice(0, -1) + valorBotao;
            listaNumerosVisor[listaNumerosVisor.length - 1] = valorBotao;
        } else {
            listaNumerosVisor.push(valorBotao);
            visorNumeros.value += valorBotao;
        }
    }
}


function mostrarResultado(){

}


function calculoResultado(){

}