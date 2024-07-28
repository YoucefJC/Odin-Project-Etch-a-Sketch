const CONTAINER_WIDTH = '960';
const NUM_BOX_PER_SIDE = 16;

let grid16 = document.querySelector('.grid-16-layout');
grid16.style.maxWidth = CONTAINER_WIDTH + 'px';

setGrid(NUM_BOX_PER_SIDE);
setTrail();

function setGrid(numBoxesPerSide){

    let numBoxes = numBoxesPerSide ** 2;
    let flexBasis = (100 / numBoxesPerSide) + '%';
    let boxWidth = Math.floor((CONTAINER_WIDTH / numBoxesPerSide)) + 'px';

    let boxes = [];

    for (let Index = 0; Index < numBoxes; Index++) {
        
        let gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        gridBox.style.flexBasis = flexBasis;
        gridBox.style.minHeight = boxWidth;
        gridBox.setAttribute('opacity', 0.0);
        boxes.push(gridBox);
    }

    grid16.replaceChildren(...boxes);
    setTrail();
}

function setTrail(){
    
    let boxes = document.querySelectorAll('.grid-box');

    boxes.forEach(singleBox => {
        
        singleBox.addEventListener('mouseover', (event) => {

            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            event.target.style.backgroundColor = '#' + randomColor;
        });

        singleBox.addEventListener('mouseout', (event) => {

            let opacity = updateOpacityAttribute(event.target);
            event.target.setAttribute('opacity', opacity);

            setTimeout(() => {
                
                event.target.style.backgroundColor = 'black';
                event.target.style.opacity = opacity;
            }, 500);

            
        });
    });

    function updateOpacityAttribute(element){
        
        let elementOpacity = parseFloat(element.getAttribute('opacity'));
        let newOpacity = (elementOpacity < 0.9) ? elementOpacity + 0.1 : 1.0;
        return newOpacity;
    }
}

let changeBoxesBtn = document.querySelector('#change-boxes-btn');
changeBoxesBtn.addEventListener('click', (event) => {

    let numberOfBoxes = parseInt(prompt('Please input the number of boxes per side (max 100)'));
    if( numberOfBoxes > 100) numberOfBoxes = 100;
    if( numberOfBoxes ) setGrid(numberOfBoxes);
});