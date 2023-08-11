const keyDiv = document.getElementById("key");
const boxesContainer = document.querySelector(".boxes-colors");
const boxColor = document.querySelectorAll(".box-color");

boxColor.forEach((box) => {
    box.addEventListener("click", (event) => {
        if (event.target !== keyDiv) {
            event.target.style.backgroundColor = "black";
        }
    });
});

document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        keyDiv.style.backgroundColor = "pink";
    } else if (event.key === "s") {
        keyDiv.style.backgroundColor = "orange";
    } else if (event.key === "d") {
        keyDiv.style.backgroundColor = "lightblue";
    } else if (event.key === "q") {
        createNewColorDiv("purple");
    } else if (event.key === "w") {
        createNewColorDiv("gray");
    } else if (event.key === "e") {
        createNewColorDiv("brown");
    }
});

function createNewColorDiv(color) {
    const newDiv = document.createElement("div");
    newDiv.className = "box-color";
    newDiv.style.backgroundColor = color;
    newDiv.textContent = "New";
    boxesContainer.appendChild(newDiv);
}
