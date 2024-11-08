"use strict"
console.clear();
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
let km = 0;
let discount = "";


//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
let age = null

//- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

if (age > 65) {
    discount = (km * 0.21) / 100 * 40;
} else if (age >= 18) {
    discount = (km * 0.21) / 100 * 20;
} else if (age < 0) {
    alert("eta inserita non valida, ricarica la pagina e riprova")
} else {
    discount = 0;
}

// calcolo del prezzodele biglietto
const price = km * 0.21 - discount;
let priceForHumans = Math.round(price * 100) / 100 + "€";
console.log("Il prezzo del tuo viaggio è " + Math.round(price * 100) / 100 + "€");

let generateTrigger = 