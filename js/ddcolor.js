console.log("yo")

const colArray = ["red", "green", "yellow", "blue", "orange"];

const pbFillDropdown = document.getElementById("pbFillDropdown");
const ddColors = document.getElementById("ddColor")
const bdy =document.querySelector("body")
console.log(bdy)

function fillDropdown(item) {
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item
    ddColors.appendChild(el)
}

function addColors() {
    console.log("addColors")
    ddColors.innerHTML = ""
    colArray.forEach(fillDropdown)
    console.log(document.all)
}

function setBackgroundColor() {
    const selectindex = ddColors.selectedIndex;
    const selectedColor = ddColors.options[selectindex]
    const color = selectedColor.innerText
    console.log(color)
    bdy.style.backgroundColor = color
}

pbFillDropdown.addEventListener('click', addColors)
ddColors.addEventListener('change', setBackgroundColor)