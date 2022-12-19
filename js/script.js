// Inizio
// Chiedi il numero di chilometri che dovrà percorrere l' utente
alert('Buongiorno cliente')
const numerochilometri = prompt('Quanti chilometri deve percorrere?');
console.log(numerochilometri);
console.log(typeof numerochilometri);
// Chiedi l' età del passeggero
const età = prompt('Quanti anni ha?');
console.log(età);
console.log(typeof età);
// Calcolo prezzo totale in base ai chilometri (0.21 € al km)
const prezzo = 0.21;
let prezzofinale = prezzo * numerochilometri;
// Se il cliente è minorenne va applicato uno sconto del 20%
if(età >= 18){
    
}
// Se il cliente è over 65 va applicato uno sconto del 40%

// Output del prezzo con massimo due decimali
// Fine