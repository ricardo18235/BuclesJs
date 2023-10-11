// // Ejercicio 1
// console.log("------Ejercicio 1------");

// let numeroEjercicioUno = prompt("Ingrese el número a multiplicar");



// for (let i = 0; i <= 10; i++) {
//     console.log(` ${numeroEjercicioUno} x ${i} = ${numeroEjercicioUno * i} `);
// }

// // Ejercicio 2
// console.log("------Ejercicio 2------");

// let numeroGuardado = [];

// while (true) {
//     let numeroEjercicioDos = parseInt(prompt("Ingresa un número para guardar:"));

//     if (numeroEjercicioDos === 0) {
//         break; 
//     }

//     numeroGuardado.push(numeroEjercicioDos);
// }
// alert ("Ingreso el numero 0 se cerrara la aplicacion")
// console.log("Números ingresados:", numeroGuardado);


// // Ejercicio 3

// console.log("------Ejercicio 3------");

// const numeroSecreto = Math.floor(Math.random() * 100) + 1;
// let intentos = 0;

// while (true) {
//     let numeroIngresado = parseInt(prompt("Adivina el número secreto (entre 1 y 100):"));

//     if (isNaN(numeroIngresado)) {
//         alert("Por favor, ingresa un número válido.");
//     } else if (numeroIngresado === 0) {
//         alert("Has decidido salir del juego. El número secreto era " + numeroSecreto + ".");
//         break;
//     } else {
//         intentos++;

//         if (numeroIngresado === numeroSecreto) {
//             alert(`¡Felicitaciones! Adivinaste el número secreto (${numeroSecreto}) en ${intentos} intentos.`);
//             break;
//         } else if (numeroIngresado < numeroSecreto) {
//             alert("El número ingresado es menor. ¡Inténtalo de nuevo!");
//         } else {
//             alert("El número ingresado es mayor. ¡Inténtalo de nuevo!");
//         }
//     }
// }
// console.log("Juego terminado.");

// // Ejercicio 4

// function esPrimo(numeroPrim) {
//     if (numeroPrim <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(numeroPrim); i++) {
//         if (numeroPrim % i === 0) return false;
//     }
//     return true;
// }

// const numeroPrim = parseInt(prompt("Ingresa un número para verificar si es primo:"));
// console.log(esPrimo(numeroPrim) ? `${numeroPrim} es un número primo.` : `${numeroPrim} no es un número primo.`);

// // Ejercicio 5
// console.log("------Ejercicio 5------");

// const numero = parseInt(prompt("Ingresa un número para encontrar sus divisores:"));

// console.log(`Divisores de ${numero}:`);

// for (let i = 1; i <= numero; i++) {
//     if (numero % i === 0) {
//         console.log(i);
//     }
// }

// // Ejercicio 6
// console.log("------Ejercicio 6------");
// const miArreglo = [ 1, 2, 3, 4, 5, 6, 71, 18, 97, 106 ]

// for (let i = 0; i < miArreglo.length; i++) {
//     console.log(`Mi array en la posicion ${i} tiene guardaddo a : ${miArreglo[i]}`);
// }

// // Ejercicio 7
// console.log("------Ejercicio 7------");

// const miArregloMultiplicar = [ 17, 25, 30, 43, 5, 61, 71, 18, 97, 106 ]

// for (let i = 0; i < miArregloMultiplicar.length; i++) {
//     let multiplo2= (miArregloMultiplicar[i] *2); 
//     console.log(`El doble de ${miArregloMultiplicar[i]} es=  ${multiplo2}`);
// }

// //Ejercicio 8
// console.log("------Ejercicio 8------");

// const familia = [
//     {
//         nombre: "Juan",
//         apellido: "Pérez",
//         edad: 25,
//         ciudad: "Bogota"
//     },

//     {
//         nombre: "Pedro",
//         apellido: "Pérez",
//         edad: 54,
//         ciudad: "Bogota"
//     },

//     {
//         nombre: "María",
//         apellido: "Pérez",
//         edad: 43,
//         ciudad: "Bogota"
//     },

//     {
//         nombre: "Ana",
//         apellido: "Pérez",
//         edad: 15,
//         ciudad: "Bogota"
//     }
// ];

// for (let i = 0; i < familia.length; i++) {
//     console.log(`Hola soy ${familia[i].nombre} ${familia[i].apellido} tengo ${familia[i].edad} años y vivo en la ciudad de ${familia[i].ciudad}`);
// }

// // Ejercicio 9
// console.log("------Ejercicio 9------");

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 !== 0) {
//         console.log(`El numero ${numeros[i]} es un numero impar`);
//     }

// }
