/*
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça{

K = K + 1;
SOMA = SOMA + K;

}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
*/

function valorDeSoma(){
    const indice = 13;
    let soma = 0;
    let K = 0;

    while(K < indice){
        K = K + 1;
        soma = soma + K;
    }

    console.log('O valor de soma é:', soma)
}

valorDeSoma();

//o valor de soma será igual a 91