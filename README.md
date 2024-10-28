# Resolução - Prova Tecnica

## 1. Verificando se um número pertence à sequência de Fibonacci


### Logica

```javascript
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
```

### Exemplo de Uso
```javascript
// Entrada: 8
// Saída: True
```

---

## 2. Contando a ocorrência da letra 'a' em uma string

### Código

```javascript
function verificarLetraA(str) {

  let matches = str.match(/a/gi);

  if (matches) {
      let quantidade = matches.length;
      console.log(`A letra 'a' aparece ${quantidade} vezes.`);
  } else {
      console.log("A letra 'a' não aparece na string.");
  }
}
```

### Exemplo de Uso
```javascript
// Entrada: "A rápida raposa marrom pula sobre o cachorro preguiçoso."
// Saída: "A letra 'a' aparece 7 vezes."
```

---

## 3. Valor da variável SOMA

### Código da questão

```plaintext
int INDICE = 12, SOMA = 0, K = 1; 
enquanto K < INDICE faça { 
    K = K + 1; 
    SOMA = SOMA + K; 
} 
imprimir(SOMA);
```

### Resposta

Após o processamento, o valor da variável `SOMA` será **77**.

---

## 4. Próximos elementos nas sequências

### a) 1, 3, 5, 7, ___

**Próximo elemento:** **9** (série de números ímpares).

### b) 2, 4, 8, 16, 32, 64, ____

**Próximo elemento:** **128** (série de potências de 2).

### c) 0, 1, 4, 9, 16, 25, 36, ____

**Próximo elemento:** **49** (série de quadrados perfeitos: 7^2).

### d) 4, 16, 36, 64, ____

**Próximo elemento:** **100** (série de quadrados perfeitos [apenas pares]: 10^2).

### e) 1, 1, 2, 3, 5, 8, ____

**Próximo elemento:** **13** (série de Fibonacci).

### f) 2, 10, 12, 16, 17, 18, 19, ____

**Próximo elemento:** **200** (série de números que iniciam com a letra 'd').

---

## 5. Lógica para Descobrir Qual Interruptor Controla Cada Lâmpada

1. Primeiro, eu ligo o primeiro interruptor e deixo-o ligado por cerca de 10 minutos.
2. Após 10 minutos, desligo o primeiro interruptor e ligo o segundo interruptor.
3. Agora, vou usar as duas idas à sala de lampadas

### Análise
- A lâmpada que estiver **acesa** corresponde ao **segundo interruptor** (o que você acabou de ligar).
- A lâmpada que estiver **apagada, mas quente** corresponde ao **primeiro interruptor** (que você deixou ligado antes).
- A lâmpada que estiver **apagada e fria** corresponde ao **terceiro interruptor** (que nunca foi ligado).
