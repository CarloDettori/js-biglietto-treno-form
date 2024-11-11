"use strict"
console.clear();

// raccoglimento variabili utili

let discount = 0;
let offerValue = "";
let nameSurnameValue = "";
let lengthValue = "";
let priceForHumans = "";
let ticketAge = "";
let offer = document.getElementById("offer");
let nameSurname = document.getElementById("name-surname");
let travel = document.getElementById("length");
let genera = document.getElementById("generate");
let newTicket = document.getElementById("ticket");

//template per il biglietto
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

// condizione di sconto
genera.addEventListener("click", function (event) {
    event.preventDefault;
    offerValue = offer.value;
    lengthValue = parseInt(travel.value);
    nameSurnameValue = nameSurname.value;
    if (offerValue = "3") {
        discount = (lengthValue * 0.21) / 100 * 40;
        ticketAge = "Senior";
    } else if (offerValue = "2") {
        discount = 0;
        ticketAge = "Normal";
    } else if (offerValue = "1") {
        discount = (lengthValue * 0.21) / 100 * 20;
        ticketAge = "Junior";
    } else {
        alert("eta inserita non valida, clicca su Annulla e riprova");
    }
    const price = lengthValue * 0.21 - discount;
    priceForHumans = lengthValue.toFixed() + " €";
    newTicket.innerHTML = template;
});

