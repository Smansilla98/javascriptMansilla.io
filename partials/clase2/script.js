let primerNumero = prompt("Ingresa un número");
if (primerNumero > 1000){
    alert("Tu numero es mayor a 1000, ingresaste " + primerNumero);  
}
else{
    alert("El número que ingresaste, es menor a 1000. Ingresaste " + primerNumero);
}

let saludo = prompt("Hola! Saludame");
console.log(saludo);

let numero = prompt("Ingresa un número entre 10 y 50");
if ((10 >= numero) && (numero <=50)) {
    alert("Tu número esta entre 10 y 50, ingresaste: " + numero);
}
else{
    alert("El número que ingresaste, esta por fuera del rango");
}
