// 3 - Faça um programa que leia do usuário uma temperatura em Fahrenheit, converta-a para graus Celsius e escreva o novo valor na tela. A fórmula de conversão de Fahrenheit (F) para Celsius é C = ( ( F - 32 ) * 5 ) / 9. Exemplo: 100 Fahrenheit = 37,77 Celsius.

const converterTemperatura = {
    converter: (temp) => {
        return{
            Celsius: (temp - 32) * 5 / 9
        }
    }
}

console.log(converterTemperatura.converter(100));