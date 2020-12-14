var km = parseInt(prompt('Quanti Kilometri devi percorrere?'));
document.getElementById('km').innerHTML += km;
console.log(km);

var eta = parseInt(prompt('Quanti anni hai?'));
document.getElementById('eta').innerHTML += eta;
console.log(eta);

var prezzo = km * 0.21
document.getElementById('prezzo').innerHTML += prezzo;
console.log(prezzo);

var sconto = 'Nullo'


if (eta <= 17) {
  sconto = (prezzo * 20) / 100;
} else if (eta >= 65) {
  sconto = (prezzo * 40) / 100;
}
document.getElementById('sconto').innerHTML += sconto;
console.log(sconto);

var prezzoFinale = prezzo;

if (sconto != 'Nullo') {
  prezzoFinale = prezzo - sconto;
}
console.log(prezzoFinale);

var arrotondato = prezzoFinale.toFixed(2)
document.getElementById('prezzoFinale').innerHTML += arrotondato;
console.log(arrotondato);
