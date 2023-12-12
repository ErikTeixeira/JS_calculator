
let botoesNumeros = document.querySelectorAll(".botaoNumero");

let botoesElementos = document.querySelectorAll(".botoesElementos");

let textoErro = document.querySelector("h3")


const sunIcon = "imgs/SunIcon.svg";
const moonIcon = "imgs/MoonIcon.svg";

const gitClaro = "imgs/GitHubLight.svg";
const gitEscuro = "imgs/GitHubDark.svg";

const temaClaro = "styles/light.css";
const temaEscuro = "styles/dark.css";


let visorNumeros = document.getElementById("visorNumeros");

let listaNumerosVisor = [];


function limparNumeros(){
    visorNumeros.value = "";
    textoErro.innerHTML = ``;
    listaNumerosVisor = [];
}


botoesNumeros.forEach(botao => {
    botao.addEventListener('click', function() {
        textoErro.innerHTML = ``;

        let valorDoBotao = botao.innerHTML;

        listaNumerosVisor.push(valorDoBotao);

        visorNumeros.value += valorDoBotao;
    });
});


botoesElementos.forEach(botao => {
    botao.addEventListener('click', function() {
        if (botao.textContent === "x") {
            botao.textContent = "*";
        } 

        let valorBotao = botao.innerHTML;
    
        textoErro.innerHTML = ``;
    
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
    });
});


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



function mudarTema(){
    const tema = document.getElementById("tema");
    const imgIcon = document.getElementById("imgIcon");
    const gitHubIcon = document.getElementById("gitHubIcon");

    if (tema.getAttribute("href") === temaClaro) {
        setTimeout(() => {
            tema.setAttribute("href", temaEscuro);
            imgIcon.setAttribute("src", sunIcon);
            gitHubIcon.setAttribute("src", gitClaro);
        }, 100);
    } else {
        setTimeout(() => {
            tema.setAttribute("href", temaClaro);
            imgIcon.setAttribute("src", moonIcon);
            gitHubIcon.setAttribute("src", gitEscuro);
        }, 100);
    }
}

