// Script base:

// function pintar() {
//     ele.style.backgroundColor = "yellow";
// }
// const ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);

// Script 3.2:

// const ele = document.getElementById("ele1");

// ele.addEventListener("click", function() {
//     ele.style.backgroundColor = 'yellow';
// });

// Script 3.3:

const ele = document.getElementById("ele1");

function pintar(color = 'green') {
    ele.style.backgroundColor = color;
}

ele.addEventListener("click", function() {
    pintar('yellow');
});
