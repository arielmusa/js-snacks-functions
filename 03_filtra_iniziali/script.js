/* Scrivi una funzione che accetti un'array di stringhe 
e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function filterArray(array, firstChar) {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    currentItem = array[i];
    if (currentItem[0] === firstChar) newArray.push(currentItem);
  }
  return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filterArray(names, "A"));
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
