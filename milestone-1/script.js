/* Per i multipli di 3 stampi Fizz al posto del numero
e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Stampare in console. */

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

    console.log(fizzOrBuzz);
 

}