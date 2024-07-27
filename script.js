const CONTAINER_WIDTH = '960';
const NUM_BOX_PER_SIDE = 16;

let grid16 = document.querySelector('.grid-16-layout');
grid16.style.maxWidth = CONTAINER_WIDTH + 'px';

setGrid(NUM_BOX_PER_SIDE);
setTrail();

function setGrid(numBoxesPerSide){

    let numBoxes = numBoxesPerSide ** 2;
    let boxWidth = Math.floor((CONTAINER_WIDTH / numBoxesPerSide)) + 'px';

    let boxes = [];

    for (let Index = 0; Index < numBoxes; Index++) {
        
        let gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        gridBox.style.minWidth = boxWidth;
        gridBox.style.minHeight = boxWidth;
        boxes.push(gridBox);
    }

    grid16.replaceChildren(...boxes);
    setTrail();
}

function setTrail(){
    
    let boxes = document.querySelectorAll('.grid-box');

    boxes.forEach(singleBox => {
        
        singleBox.addEventListener('mouseover', (event) => {

            event.target.style.backgroundColor = 'aquamarine';
        });

        singleBox.addEventListener('mouseout', (event) => {

            setTimeout(() => {
                event.target.style.backgroundColor = 'transparent';
            }, 500);
        });
    });
}

let changeBoxesBtn = document.querySelector('#change-boxes-btn');
changeBoxesBtn.addEventListener('click', (event) => {

    let numberOfBoxes = parseInt(prompt('Please input the number of boxes per side (max 100)'));
    setGrid(numberOfBoxes);
});