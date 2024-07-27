const CONTAINER_WIDTH = '960';
const NUM_BOX_PER_SIDE = 16;
const NUM_BOXES = NUM_BOX_PER_SIDE ** 2;
const BOX_WIDTH = Math.floor(CONTAINER_WIDTH / NUM_BOX_PER_SIDE) + 'px';

let grid16 = document.querySelector('.grid-16-layout');
grid16.style.maxWidth = CONTAINER_WIDTH + 'px';

for (let Index = 0; Index < NUM_BOXES; Index++) {
    
    let gridBox = document.createElement('div');
    gridBox.classList.add('grid-box');
    gridBox.style.minWidth = BOX_WIDTH;
    gridBox.style.minHeight = BOX_WIDTH;
    grid16.appendChild(gridBox);
}


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
