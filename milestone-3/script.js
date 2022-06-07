/* Per ogni numero, dato un container nel DOM, appendi un 
elemento html con il numero o la stringa corretta.
Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, 
per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 
(seguendo le regole della Milestone 1). */

const numbersContainer = document.querySelector('.numbers-container');

// Scriviamo in console tutti i numeri da 1 a 100
for(let i = 1; i <= 100; i++) {

    /* Per i multipli di 3 stampi Fizz al posto del numero
    e per i multipli di 5 stampi Buzz. */
    let fizzOrBuzz;
    let fizzOrBuzzClass;

    if (i % 3 === 0 && i % 5 === 0) {
        fizzOrBuzz = 'FizzBuzz';
        fizzOrBuzzClass = 'fizz-buzz';
    } else if (i % 3 === 0) {
        fizzOrBuzz = 'Fizz';
        fizzOrBuzzClass = 'fizz';
    } else if (i % 5 === 0) {
        fizzOrBuzz = 'Buzz';
        fizzOrBuzzClass = 'buzz';
    } else {
        fizzOrBuzz = i;
    }

    // Creare dei nuovi box con la rispettiva classe per cambiagli bg-color
    const newBox = `<li class="box ${fizzOrBuzzClass}">${fizzOrBuzz}</li>`;

    // Concateniamo gli li al numbersContainer
    numbersContainer.innerHTML += newBox; 

}