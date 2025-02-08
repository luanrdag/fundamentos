/*
let diaDaSemana = prompt("Qual é o dia da semana");

if(diaDaSemana == "Domingo" || diaDaSemana == "Sábado") {
    alert("Bom final de semana");
} else {
    alert("Boa semana");
}


let numero = prompt("Digite um número");

if(numero > 0) {
    alert("Positivo");
} else if(numero < 0) {
    alert("Negativo");
} else {
    alert("Zero");
}
    */

let pontos = 0;
let tentativas = 0;

while(pontos < 100) {
    tentativas++;
    pontos = prompt("Digite a pontuação");
    if(tentativas > 0 && pontos < 100) {
        alert("Tente novamente");
    } 
}

alert("Parabéns, você tirou mais 100 pontos");
alert(`Foram ${tentativas} tentativas!`);
