//Call variables const or let.
//let for any value with changeable values.
//const can also be any value, but the value cant be reassigned

let inp = document.querySelector(".inpColor");
console.log(inp);

let bdy = document.querySelector("body");
console.log(bdy);

let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);
pbCol.textContent = "Tryk mig for set color";
pbCol.addEventListener('click', setBackgroundColor);

const inpColorValue = document.querySelector(".inpColorValue");
console.log(inpColorValue);

const inpColorPicker = document.getElementById("inpColorPicker");
console.log();


function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

function useColorPicker() {
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

pbCol.addEventListener('click', setBackgroundColor);
document.addEventListener('keyup', setBackgroundColor);
inpColorPicker.addEventListener('input', useColorPicker);