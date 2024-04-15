// Tabuada
// let number = parseFloat(prompt("Write a number:"));
// let tabuada = "";

// for(let i = 0; i <= 20; i++) {
//     tabuada += " - " + (number * i);
// }
// alert(tabuada);

//Palindromo

const palavra = prompt("Informe uma palavra:");
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!");
} else {
  alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida);
}