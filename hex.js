const colorChangerBtn = document.querySelector('#color-changer');
const colorName = document.querySelector('#color-name');
const container = document.querySelector('.container');

const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B','C', 'D', 'E', 'F']


colorChangerBtn.addEventListener('click', genColor)


function genColor(){
    let hex = '#'
    for(let i = 0; i < 6; i++){
        hex += hexColors[genRandomNum()]
    }

    colorName.textContent = `Background Color: ${hex}`
    container.style.backgroundColor = hex
}

function genRandomNum(){
    return Math.floor(Math.random() * hexColors.length);
}