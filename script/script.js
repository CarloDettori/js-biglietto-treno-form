"use strict"
console.clear();
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
let km = prompt("inserisci in km la distanza che desideri percorrere");
let discount = "";


//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
let age = prompt("Inserisci qui la tua età (in numero)")

//- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

if (age > 65) {
    discount = (km * 0.21) / 100 * 40;
} else if (age >= 18) {
    discount = (km * 0.21) / 100 * 20;
} else if (age < 0) {
    console.log("eta inserita non valida, ricarica la pagina e riprova")
} else {
    discount = 0;
}

const price = km * 0.21 - discount;
let priceForHumans = alert("Il prezzo del tuo viaggio è " + Math.round(price * 100) / 100 + "€");
console.log("Il prezzo del tuo viaggio è " + Math.round(price * 100) / 100 + "€");