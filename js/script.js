var km = parseInt(prompt('Quanti Kilometri devi percorrere?'));
console.log(km);

var eta = parseInt(prompt('Quanti anni hai?'));
console.log(eta);

var prezzo = km * 0.21
console.log(prezzo);

var sconto = 'Nullo'
console.log(sconto);

if (eta <= 17) {
  console.log(sconto = (prezzo * 20) / 100);
} else if (eta >= 65) {
  console.log(sconto = (prezzo * 40) / 100);
}

var prezzoFinale = prezzo;
console.log(prezzoFinale);

if (sconto != 'Nullo') {
  console.log(prezzoFinale = prezzo - sconto);
}
