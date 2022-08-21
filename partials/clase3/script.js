let ingresarNumero = parseInt(prompt("Ingrese un número"));

for(let i = 0; i <=10; i++){
    let resultado = ingresarNumero + i;
    alert(ingresarNumero +"+" + i + "=" + resultado);
};

for (let i = 1; i<=3; i++){
    let ingresarTexto = prompt("Ingrese sus 3 jugadores favoritos de futbol");

    alert(" Jugador N° "+i+": " + ingresarTexto);
};


let saludo = parseInt(prompt("Ingrese un número"));
let hola = "Hola";

alert(hola.repeat(saludo));