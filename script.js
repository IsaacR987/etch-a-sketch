const container = document.querySelector('#container');

function checkGrid() {
    while(container.hasChildNodes(box)) {
        container.removeChild(box);
    }
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize*gridSize; i++) {
        const box = document.createElement('div');
        box.classList.add('gridBox');
        box.style.cssText = "border: 1px solid black; padding: 1px; width: 10px; height: 10px;"
        container.appendChild(box);
        const myContainer = document.getElementById("container");
        const newWidth = (gridSize*14);
        myContainer.style.maxWidth = newWidth + "px";
        console.log(newWidth);
    };
};

const makeGrid = document.querySelector('#makeGrid');

makeGrid.addEventListener('click', () => {
    gridSize = parseInt(prompt('how big is the grid?'));
    createGrid(gridSize);
});


const reset = document.querySelector("#reset");

reset.addEventListener('click', () => {
    if(document.querySelector('.gridBox') !== null) {
        let element = document.getElementById('container');
        while(element.firstChild) {
            element.removeChild(element.firstChild);
        }
    };
});