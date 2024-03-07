/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Por favor, digite a sequencia de caracteres a serem invertidos ->`, userInput => {
    function reverse(value){
        let revertedString = '';
    
        for (let i = value.length - 1; i >= 0; i--){   
            revertedString += value[i];
        }
    
        console.log(revertedString);
    }
    
    reverse(userInput);
});