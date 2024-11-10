"use strict"
console.clear();



//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
let km = 0;
let discount = "";


//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
let age = null
let offer = ""

//- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

if (age > 65) {
    discount = (km * 0.21) / 100 * 40;
    offer = "Senior"
} else if (age >= 18 && age <= 60) {
    discount = 0;
    offer = "Normal"
} else if (age < 18 % age >= 0) {
    discount = (km * 0.21) / 100 * 20;
    offer = "Junior"
} else {
    alert("eta inserita non valida, ricarica la pagina e riprova")
}

// calcolo del prezzo del biglietto
const price = km * 0.21 - discount;
let priceForHumans = Math.round(price * 100) / 100 + "€";
console.log("Il prezzo del tuo viaggio è " + Math.round(price * 100) / 100 + "€");



let template = ` 
    <h1>IL TUO BIGLIETTO</h1>
    <div class="bg-light rounded">
        <h4>DETTAGLIO PASSEGGERI</h4>
        <div class="d-flex">
            <div class="bg-secondary">
                <h><strong>NOME PASSEGGERO</strong></h>
                <p><strong id="Name-Surname"></strong></p>
            </div>
            <table>
                <thead>
                    <tr>
                        <td><strong>Offerta</strong></td>
                        <td><strong>Carrozza</strong></td>
                        <td><strong>Codice CP</strong></td>
                        <td><strong>Costo Biglietto</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${offer}</td>
                        <td>5</td>
                        <td>92911</td>
                        <td>${priceForHumans}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
`


newTicket.innerHTML = template;