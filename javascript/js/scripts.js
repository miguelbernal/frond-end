// alert("Hola");
console.log("Hola desde la consola");
console.error("Hola desde la consola - error");
console.warn("Hola desde la consola - warning");
document.write(`
<h1>Hola desde Javascript</h1>
<h2>Bienvenidos al DOM</h2>
`);
// variables
var nombre = "Victor"; // string -> cadena de caracteres
let edad = 20;
let altura = 1.80;
let estudia = true; // true o false

edad = 18;

console.log(nombre, edad, altura, estudia);
console.log("Me llamo " + nombre + " y tengo " + edad + " años"); // concatenacion
console.log(`Me llamo ${nombre} y tengo ${edad} años`); // template string

const PI = 3.141516;
console.log(PI);
//PI = 3.14;

// Estructuras del lenguaje
// if
//  (condicion)
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
console.log("Continuando ...");
// if anidados
if (edad > 18) {
    console.log("Eres mayor de edad");
} else {
    if(edad === 18){
        console.log("Tienes 18");
    } else {
        console.log("Eres menor de edad");
    }
}
// if else if
if (edad > 18) {
    console.log("Eres mayor de edad");
} else if(edad === 18) {
    console.log("Tienes 18");
} else {
    console.log("Eres menor de edad");
}
// switch
let dia = 2
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log('Lunes');
        break;
    case 3:
        console.log('Martes');
        break;
    default:
        console.log('Dia erroneo');
        break;
}

console.log('Continuando ...');

// Ciclicas
// Automatico
//   valor inicial
//              se va a repetir mistras se cumpla esta condicion
//                       incremento 
for (let i = 1; i <= 10; i++) {
    console.log(i);    
}
console.log('Continuando ...');
// While
// Manual
let i = 1
while (i <= 10) {
    console.log(i);
    i++;
}
console.log('Continuando ...');
// Do While
i = 10000
do {
    console.log(i);
    i++;
} while (i <= 10);
console.log('Continuando ...');

const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves", "Viernes", "Sabado"];
dias.forEach(dia => {
    console.log(dia);
});