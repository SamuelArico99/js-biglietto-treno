// Inizio
// Chiedi il numero di chilometri che dovrà percorrere l' utente
alert('Buongiorno cliente')
const numerochilometri = prompt('Quanti chilometri deve percorrere?');
console.log(numerochilometri);
console.log(typeof numerochilometri);

// Chiedi l' età del passeggero
const eta = prompt('Quanti anni ha?');
console.log(eta);
console.log(typeof eta);
// Calcolo prezzo totale in base ai chilometri (0.21 € al km)
const prezzo = 0.21;
let prezzofinale = prezzo * parseInt(numerochilometri);
console.log(prezzofinale.toFixed(2));
document.getElementById('info').innerHTML = prezzofinale.toFixed(2);

// Se il cliente è minorenne va applicato uno sconto del 20%
if(eta < 18){
    prezzofinale = (prezzofinale -(prezzofinale / 100)*20);
    console.log(prezzofinale.toFixed(2));
    document.getElementById('info').innerHTML = prezzofinale.toFixed(2);
}

// Se il cliente è over 65 va applicato uno sconto del 40%
else if(eta >= 65){
    prezzofinale = (prezzofinale -(prezzofinale / 100)*40);
    console.log(prezzofinale.toFixed(2));
    document.getElementById('info').innerHTML = prezzofinale.toFixed(2);
}
// Output del prezzo con massimo due decimali
// Fine