/**
 * Verifica quantas vezes a letra 'a' (maiúscula ou minúscula) aparece em uma string.
 * @param {string} str - String a ser verificada.
 * @returns {void} - Exibe uma mensagem para o usuário.
 * @referencia - https://www.devmedia.com.br/expressoes-regulares-em-javascript/37015
 */
function verificarLetraA(str) {

  let matches = str.match(/a/gi);

  if (matches) {
      let quantidade = matches.length;
      console.log(`A letra 'a' aparece ${quantidade} vezes.`);
  } else {
      console.log("A letra 'a' não aparece na string.");
  }
}

// Exemplo de uso
let texto = "A rápida raposa marrom pula sobre o cachorro preguiçoso.";
verificarLetraA(texto);
