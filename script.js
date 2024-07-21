let grid16 = document.querySelector('.grid-16-layout');

for (let rowIndex = 0; rowIndex < 16; rowIndex++) {

    let gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    grid16.appendChild(gridRow);

    for (let colIndex = 0; colIndex < 16; colIndex++) {

        let gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        gridRow.appendChild(gridBox);   
    }
}