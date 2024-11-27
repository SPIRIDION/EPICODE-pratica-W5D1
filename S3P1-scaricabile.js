/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(numeroUno, numeroDue) {
  let totale = numeroUno + numeroDue
  let risultato
  numeroUno === numeroDue ? risultato = totale * 3 : risultato = totale
  return risultato
}

console.log(crazySum(55,55))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(interoUno) {
  return ((interoUno <= 100) && (interoUno >= 20)) || interoUno === 400
}

console.log(boundary(400))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
  console.log(stringa.split('').reverse().join(''))
}

reverseString("EPICODE")

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(parola) {
  parola = parola.split(' ')
  let parolaMaiusc = []
  for (let word of parola) {
    parolaMaiusc.push(word.charAt(0).toUpperCase() + word.slice(1))
  }
  console.log(parolaMaiusc.join(' '))
}

upperFirst('ciao come stai?')

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  for (let i = 0; i < n; i++) {
    let numeroRandomico = Math.random()
    console.log(Math.floor(numeroRandomico * 10))
  }
}

giveMeRandom(5)

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1,l2) {
  return l1 * l2
}

console.log("L'area del rettangolo è  pari a: " + area(10,2))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(numero) {
  let differenzaAssoluta
  numero >= 19 ? differenzaAssoluta = numero - 19 : differenzaAssoluta = 19 - numero
  if (differenzaAssoluta > 19) {
    return differenzaAssoluta * 3
  } else {
    return differenzaAssoluta
  }
}

console.log(crazyDiff(80))
console.log(crazyDiff(7))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(parolaCode) {
  parolaCode = parolaCode.split(' ')
  parolaCode[0] !== 'code' ? console.log('code ' + parolaCode.join(' ')) : console.log(parolaCode.join(' '))
}

codify('Ciao come stai?')
codify('code Ciao come stai?')

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(intero) {
  return (intero % 3) === 0 || (intero % 7) === 0
}

console.log(check3and7(3))
console.log(check3and7(21))
console.log(check3and7(11))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringa) {
  let nuovaStringa = []
  for (let i = 1; i < (stringa.length - 1); i++) {
    nuovaStringa.push(stringa[i])
  }
  console.log(nuovaStringa.join(''))
}

cutString('Ciao come stai?')
cutString('EPICODE')