/**
 * Verifica se um número pertence ou não a sequência de Fibonacci.
 * @param {number} n - Número a ser verificado.
 * @returns {boolean} - true se o número pertence a sequência, false caso contrário.
 */
function verificaFibonacci(n) {
  if (n < 0) return false;
  let a = 0;
  let b = 1;
  
  while (a < n) {
      let temp = a + b;
      a = b;
      b = temp;
  }

  return a === n;
}

// Exemplo de uso
let numero = 8;
console.log(verificaFibonacci(numero));