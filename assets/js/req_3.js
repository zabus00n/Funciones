// Script Base:

// function pintar() {
//     ele.style.backgroundColor = "yellow";
// }
// const ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);

// Script 3.2:
// Modifica la función para que reciba el elemento clickeado de forma de no tener que seleccionarlo nuevamente dentro de la función.

// const ele = document.getElementById("ele1");

// ele.addEventListener("click", function() {
//     ele.style.backgroundColor = 'yellow';
// });

// Script 3.3:
// Modifica el código anterior para poder pasarle un color como argumento a la función pintar.
// El color debe ser verde (green) por defecto, al hacer clic en el párrafo se debe pasar amarillo como color.

const ele = document.getElementById("ele1");

function pintar(color = "green") {
    ele.style.backgroundColor = color;
}

ele.addEventListener("click", function () {
    pintar("yellow");
});
