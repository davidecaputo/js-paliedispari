/*
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.

    <div class="dc-result win">
        Hai vinto
    </div>
    <div class="dc-result lose">
        Hai perso
    </div>
    <div class="dc-result error">
        Il gioco non funziona, forse non hai inserito il numero o non hai scelto pari o dispari
    </div>
*/

const boxNumber = document.querySelector('input');
const boxSelect = document.querySelector('select');
const btn = document.querySelector('button');

btn.addEventListener('click', controllNumber);

function controllNumber(){
    const userNumber = parseInt(boxNumber.value);
    console.log(userNumber);
    const selected = boxSelect.value;
    console.log(selected);
    let computerNumber = getRndInteger(1, 5);
    console.log(computerNumber);
    let numberAddition = userNumber + computerNumber;
    console.log(numberAddition);
    let resultEvenOrOdd = evenOrOdd(numberAddition);
    console.log(resultEvenOrOdd);
    if(selected !== 'Seleziona' && userNumber){
        if (selected === 'pari' && resultEvenOrOdd){
            console.log('hai vinto');
        } else if(selected === 'dispari' && !resultEvenOrOdd){
            console.log('hai vinto');
        } else {
            console.log('hai perso');
        }
    } else {
        console.log('Il gioco non funziona, forse non hai inserito il numero o non hai scelto pari o dispari');
    }
};


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function evenOrOdd(number){
    if((number % 2) === 0){
        return true;
    } else {
        return false;
    }
};