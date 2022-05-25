// 2 - Faça uma função que recebe um valor inteiro e verifica se o valor é par. A função deve retornar 1 se o número for par e 0 se for ímpar.

const number = 2;
const result = verificaPar(number);

function verificaPar(number) {
    if (number % 2 == 0) {
        return 1;
    } else {
        return 0;
    }
}

console.log(result);
