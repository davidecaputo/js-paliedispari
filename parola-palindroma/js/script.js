/*
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
*/

const text = document.getElementById('text');
const btn = document.querySelector('button');
const resultTrue = document.querySelector('.dc-result-true');
const resultFalse = document.querySelector('.dc-result-false');
const resultError = document.querySelector('.dc-result-error');

btn.addEventListener('click', palindromaControl);

function palindromaControl(){
    let word = text.value;
    let reversedWord = word.split("").reverse().join("");
    if(word && isNaN(word)) {
        if(reversedWord.toLowerCase() === word.toLowerCase()){
            resultTrue.classList.remove('d-none');
            resultFalse.classList.add('d-none');
            resultError.classList.add('d-none');
        } else {
            resultFalse.classList.remove('d-none');
            resultTrue.classList.add('d-none');
            resultError.classList.add('d-none');
        }
    } else {
        resultError.classList.remove('d-none');
        resultTrue.classList.add('d-none');
        resultFalse.classList.add('d-none');
    }
};
