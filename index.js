//Questão 1 
let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
}

console.log(`Questão 1 : ${soma}`);
//O valor da variável SOMA ao final do processamento será 91.

//Questão 2
function verificaFibonacci(numero) {
  let anterior = 0;
  let atual = 1;

  while (atual < numero) {
    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return atual === numero;
}
console.log('Questão 2')
console.log(verificaFibonacci(5)); // true
console.log(verificaFibonacci(7)); // false

//Questão 3 
// Série a) 1, 3, 5, 7, ___

console.log('Questão 3')
let proximoNumeroA = 7 + 2;
console.log("Próximo número para a série a):", proximoNumeroA); // Saída: 9

// Série b) 2, 4, 8, 16, 32, 64, ___
let proximoNumeroB = 64 * 2;
console.log("Próximo número para a série b):", proximoNumeroB); // Saída: 128

// Série c) 0, 1, 4, 9, 16, 25, 36, ___
let proximoNumeroC = 7 * 7;
console.log("Próximo número para a série c):", proximoNumeroC); // Saída: 49

// Série d) 4, 16, 36, 64, ___
let proximoNumeroD = (5 * 2) * (5 * 2);
console.log("Próximo número para a série d):", proximoNumeroD); // Saída: 100

// Série e) 1, 1, 2, 3, 5, 8, ___
let proximoNumeroE = 5 + 8;
console.log("Próximo número para a série e):", proximoNumeroE); // Saída: 13

// Série f) 2,10, 12, 16, 17, 18, 19, ___
let proximoNumeroF = 19 + 1;
console.log("Próximo número para a série f):", proximoNumeroF); // Saída: 20


//Questão 4

console.log('Questão 4')
function descobrirInterruptores() {
  // Define os interruptores e lâmpadas
  let interruptores = [false, false, false]; // Inicialmente, todos os interruptores estão desligados
  let lampadas = [false, false, false]; // Inicialmente, todas as lâmpadas estão apagadas
  
  // Liga o primeiro interruptor
  interruptores[0] = true;
  
  // Vai até a sala das lâmpadas e verifica o estado de cada lâmpada
  // O estado das lâmpadas corresponde ao estado dos interruptores
  lampadas = [...interruptores];
  
  // Desliga o primeiro interruptor e liga o segundo
  interruptores[0] = false;
  interruptores[1] = true;
  
  // Vai até a sala das lâmpadas novamente e verifica o estado de cada lâmpada
  // O estado das lâmpadas corresponde ao estado dos interruptores
  lampadas = [...interruptores];
  
  // Agora, o estado dos interruptores coincide com o estado das lâmpadas
  // O interruptor 1 controla a lâmpada 1, o interruptor 2 controla a lâmpada 2 e o interruptor 3 controla a lâmpada 3
  console.log("O interruptor 1 controla a lâmpada", lampadas.indexOf(true) + 1);
  console.log("O interruptor 2 controla a lâmpada", lampadas.lastIndexOf(true) + 1);
  console.log("O interruptor 3 controla a lâmpada restante");
}

// Chamada da função para descobrir os interruptores
descobrirInterruptores();
//Questão 5
function inverterString(str) {
  let invertedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
      invertedStr += str[i];
  }
  return invertedStr;
}
console.log('Questão 5')
// Exemplo de uso:
const minhaString = "Olá, mundo!";
const stringInvertida = inverterString(minhaString);
console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);