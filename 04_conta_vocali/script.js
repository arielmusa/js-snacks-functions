/* Scrivi una funzione che accetti una stringa 
e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function countVowels(string) {
  string = string.toLowerCase();
  let vowelsCount = 0;
  for (let i = 0; i < string.length; i++) {
    currentChar = string[i];
    if (
      currentChar === "a" ||
      currentChar === "e" ||
      currentChar === "i" ||
      currentChar === "o" ||
      currentChar === "u"
    )
      vowelsCount += 1;
  }
  return vowelsCount;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
