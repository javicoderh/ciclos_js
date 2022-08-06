
function obtenerMayor(x, y) {
if (x > y) {
return x 
};
if (x < y) {
return y
}
else if  (x === y) {
return (x || y)
}
}

function MayoriaDeEdad(x) {
if (x >= 18) {
return "allowed"
}
else {
return "not allowed"
}
}

function conection(status) {
if (status === 1) {
return "online"
}
if (status === 2) {
return "away"
}
else {
return "offline"
}
}

function saludo(idioma) {
if (idioma === "aleman") {
return "Guten Tag!"
}
if (idioma === "mandarin") {
return "Ni Hao!"
}
if (idioma === "ingles") {
return "Hello!"
}
else {
return "Hola!"
}
}

function colors(color) {
if (color === "blue") {
return "this color is blue"
}  
if (color === "red") {
return "this color is red"
}
if (color === "green") {
return "this color is green"
}
if (color === "orange") {
return "this color is orange"
}
else {
return "color not found"
}                                       
}

function diezOCinco(x) {
if (x === 10) {
return true
}
if (x === 5) {
return true
}
else {
return false
}
}

function estaEnRango(x) {
if (x < 50 && x > 20) {
return true
}
else {
return false
}
}

function esEntero(x) {
if (x % 1 == 0) {
return true
}
else {
return false
}
}

function fizzBuzz(x) {
if  ((x % 3 == 0) && (x % 5 == 0)) {
return "fizzbuzz"
}
if (x % 3 == 0) {
return "fizz"
}
if (x % 5 == 0) {
return "buzz"} 
else {
return x
} 
}

function operadoresLogicos(num1, num2, num3) {
if  ((num1 < 0, num2 < 0 || num3 < 0) && (num1 > 1, num1 > num2 && num1 > num3)) {
return "numero 1 es mayor y positivo" + " y hay números negativos"
}
if ((num3 > num1 && num3 > num2) && (num1 < 0, num2 < 0 || num3 < 0)) {
return (num3 +1) + "  y hay números negativos"
}
if (num1 < 0, num2 < 0 || num3 < 0) {
return "hay negativos"
}  
if (num1 > 1, num1 > num2 && num1 > num3) {
return "numero 1 es mayor y positivo"
}  
if (num3 > num1 && num3 > num2) {
return (num3 +1)
}
else {
return false
}
}
function esPrimo(numero) {  
if ( numero === 0 ) {
return "false"
} 
if ( numero === 1 ) {
return "false"
} 
if (numero % 2 == 0) {
return "false"
}
if (numero % 3 == 0) {
return "false"
}
if (numero % 5 == 0)
return "false"
else {
return "numero primo"
}
}

function esVerdadero(x) {  
if (x === "javier") {
return "es verdadero"
}
else {
return "es falso"
}  
}

/*for (let numero = 0; numero <= 60; numero= numero + 6) {  
console.log(numero);
}*/

function tieneTresDigitos(numero) {
if (numero > 99 && numero < 1000) {
  return true
}
else {
  return false
}
}
function doWhile(){
var result = 0;
var i = 0;

do {
  i = i + 1;
  result = result + 5;
} while (i < 8);

console.log(result);
}