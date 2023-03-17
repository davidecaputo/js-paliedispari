/*
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.

    <div class="d-flex justify-content-center align-items-center dc-result win">
        <span>Hai vinto</span>
    </div>
    <div class="d-flex justify-content-center align-items-center dc-result lose">
        <span>Hai perso</span>
    </div>
    <div class="d-flex justify-content-center align-items-center dc-result error">
        Il gioco non funziona, forse non hai inserito il numero o non hai scelto pari o dispari
    </div>
*/

const boxNumber = document.querySelector('input');
const boxSelect = document.querySelector('select');
const btn = document.querySelector('button');
const container = document.querySelector('.dc-container');

btn.addEventListener('click', controllNumber);

function controllNumber(){
    const userNumber = parseInt(boxNumber.value);
    const selected = boxSelect.value;
    let computerNumber = getRndInteger(1, 5);
    const numberAddition = userNumber + computerNumber;
    const resultEvenOrOdd = evenOrOdd(numberAddition);
    if(selected !== 'Seleziona' && userNumber && userNumber >= 1 && userNumber <= 5){
        if (selected === 'pari' && resultEvenOrOdd){
            container.innerHTML = `
                <div class="d-flex justify-content-center align-items-center dc-result win">
                    <span>Hai vinto</span>
                </div>
            `
        } else if(selected === 'dispari' && !resultEvenOrOdd){
            container.innerHTML = `
                <div class="d-flex justify-content-center align-items-center dc-result win">
                    <span>Hai vinto</span>
                </div>
            `
        } else {
            container.innerHTML = `
                <div class="d-flex justify-content-center align-items-center dc-result lose">
                    <span>Hai perso</span>
                </div>
            `
        }
    } else {
        container.innerHTML = `
            <div class="d-flex justify-content-center align-items-center dc-result error">
                Il gioco non funziona, forse non hai inserito il numero o non hai scelto pari o dispari
            </div>
            `
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