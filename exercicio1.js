// 1 - Crie uma função que receba dois números inteiros retorne o menor número.

const a = 8;
const b = 4;
const result = retornaMenor(a,b);


function retornaMenor(a,b) {
    if(a < b) {
        return a;
    } else if (b < a) {
        return b;
    } else {
        return "Os números são iguais.";
    }
}

console.log(result);


