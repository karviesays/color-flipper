const colorChangerBtn = document.querySelector('#color-changer');
const colorName = document.querySelector('#color-name');
const container = document.querySelector('.container');

colorChangerBtn.addEventListener('click', changeColor)

function randomNumGen(){
    return Math.floor(Math.random() * 255) + 1;
}

function changeColor(){
    let r = randomNumGen()
    let g = randomNumGen()
    let b = randomNumGen()
    colorName.textContent = `Background Color: rgb(${r},${g},${b})`
   container.style.backgroundColor = `rgb(${r},${g},${b})`
}