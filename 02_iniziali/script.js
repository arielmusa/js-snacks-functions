/* Scrivi una funzione che accetti un array di nomi 
e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function filterArray(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    currentItem = array[i];
    newArray.push(currentItem[0]);
  }
  return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filterArray(names));
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
