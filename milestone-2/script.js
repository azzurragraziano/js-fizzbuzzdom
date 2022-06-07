/* Per ogni numero, data una ul nel DOM, aggiungete un elemento
html li con il numero o la stringa corretta 
(seguendo le regole della Milestone 1). */

const numbersContainer = document.querySelector('.numbers-container');

// Scriviamo in console tutti i numeri da 1 a 100
for(let i = 1; i <= 100; i++) {

    /* Per i multipli di 3 stampi Fizz al posto del numero
    e per i multipli di 5 stampi Buzz. */
    let fizzOrBuzz;

    if (i % 3 === 0 && i % 5 === 0) {
        fizzOrBuzz = 'FizzBuzz';
    } else if (i % 3 === 0) {
        fizzOrBuzz = 'Fizz';
    } else if (i % 5 === 0) {
        fizzOrBuzz = 'Buzz';
    } else {
        fizzOrBuzz = i;
    }

    // Creare dei nuovi box
    const newBox = `<li class="box">${fizzOrBuzz}</li>`;

    // Concateniamo gli li al numbersContainer
    numbersContainer.innerHTML += newBox; 

}