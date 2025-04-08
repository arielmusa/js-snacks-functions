/* Scrivi una funzione che accetti una stringa contenente un nome 
e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
function greetUser(name) {
  const currentTime = new Date();
  currentTime.setHours(18);
  let firstGreeting = "";
  if (currentTime.getHours() < 13) firstGreeting = "Buongiorno";
  else if (currentTime.getHours() < 17) firstGreeting = "Buon pomeriggio";
  else if (currentTime.getHours() < 23) firstGreeting = "Buonasera";
  const greetText = `${firstGreeting} ${name}`;
  return greetText;
}
// Invoca la funzione qui e stampa il risultato in console
console.log(greetUser(name));
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
