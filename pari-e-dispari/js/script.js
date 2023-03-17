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
    console.log(userNumber);
    const selected = boxSelect.value;
    console.log(selected);
    let computerNumber = getRndInteger(1, 5);
    console.log(computerNumber);
    const numberAddition = userNumber + computerNumber;
    console.log(numberAddition);
    const resultEvenOrOdd = evenOrOdd(numberAddition);
    console.log(resultEvenOrOdd);
    if(selected !== 'Seleziona' && userNumber && userNumber >= 1 && userNumber <= 5){
        if (selected === 'pari' && resultEvenOrOdd){
            console.log('hai vinto');
            container.innerHTML = `
                <div class="d-flex justify-content-center align-items-center dc-result win">
                    <span>Hai vinto</span>
                </div>
            `
        } else if(selected === 'dispari' && !resultEvenOrOdd){
            console.log('hai vinto');
            container.innerHTML = `
                <div class="d-flex justify-content-center align-items-center dc-result win">
                    <span>Hai vinto</span>
                </div>
            `
        } else {
            console.log('hai perso');
            container.innerHTML = `
                <div class="d-flex justify-content-center align-items-center dc-result lose">
                    <span>Hai perso</span>
                </div>
            `
        }
    } else {
        console.log('Il gioco non funziona, forse non hai inserito il numero o non hai scelto pari o dispari');
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