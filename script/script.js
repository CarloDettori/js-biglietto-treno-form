"use strict"
console.clear();

//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
let km = document.getElementById("length");
let discount = 0;

//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
let offer = document.getElementById("offer");
let offerValue = offer.value;
let nameSurname = document.getElementById("name-surname");
let nameSurnameValue = nameSurname.value;
let travel = document.getElementById("length");
let lengthValue = travel.value;
let ticketAge = "";



//- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
if (offerValue = "3") {
    discount = (lengthValue * 0.21) / 100 * 40;
    ticketAge = "Senior"
} else if (offerValue = "2") {
    discount = 0;
    ticketAge = "Normal"
} else if (offerValue = "1") {
    discount = (lengthValue * 0.21) / 100 * 20;
    ticketAge = "Junior"
} else {
    alert("eta inserita non valida, clicca su Annulla e riprova")
}

// calcolo del prezzo del biglietto
const price = lengthValue * 0.21 - discount;
let priceForHumans = lengthValue + " €";

let template =
    ` 
<h1>IL TUO BIGLIETTO</h1>
<div class="bg-light rounded">
    <h4>DETTAGLIO PASSEGGERI</h4>
    <div class="d-flex">
        <div class="bg-secondary">
            <h><strong>NOME PASSEGGERO</strong></h>
            <p><strong>${nameSurnameValue}</strong></p>
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
                    <td>${ticketAge}</td>
                    <td>5</td>
                    <td>92911</td>
                    <td>${priceForHumans}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`
let newTicket = document.getElementById("ticket")
function ticketGeneration() {
    newTicket.innerHTML = template;
}
let genera = document.getElementById("generate")
genera.addEventListener("submit", ticketGeneration())
console.log(nameSurnameValue);