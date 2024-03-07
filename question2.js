/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function isFibonacciNumber(num) {
    let a = 0;
    let b = 1;

    while (b <= num) {
        if (b === num) {
            return true;
        }
        const nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    return false;
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Digite o número que deseja verificar se pertence a sequência de Fibonacci ->`, userInput => {
    if (isNaN(userInput)) {
        console.log("Por favor, insira um número válido.");
    } else {
        const num = Number(userInput);
        const isFibonacci = isFibonacciNumber(num);
        if (isFibonacci) {
            console.log(`${num} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`${num} não pertence à sequência de Fibonacci.`);
        }
    }
});