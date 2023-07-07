const container = document.querySelector('#container');

function resetGrid() {
    if(document.querySelector('.gridBox') !== null) {
        let element = document.getElementById('container');
        while(element.firstChild) {
            element.removeChild(element.firstChild);
        }
    };
};

function createGrid(gridSize) {
    if(gridSize>100) {
        alert("Please 100 or less for grid!");
    }
    else {
        resetGrid();
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
    
};

const makeGrid = document.querySelector('#makeGrid');

makeGrid.addEventListener('click', () => {
    gridSize = parseInt(prompt('how big is the grid? Limit 100!'));
    createGrid(gridSize);

    const box = document.getElementById('container').querySelectorAll(".gridBox");
    box.forEach(div => div.addEventListener('click', () => {
        div.style.backgroundColor = "lightblue";
    }));

    box.forEach(div => div.addEventListener('mouseover', () => {
        div.classList.add('hoverBox');
    }));


    box.forEach(div => div.addEventListener('mouseleave', () => {
            div.classList.remove('hoverBox'); 
    }));
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

for (let i = 0; i < 256; i++){
    const box = document.createElement('div');
    box.classList.add('gridBox');
    box.style.cssText = "border: 1px solid black; padding: 1px; width: 10px; height: 10px;";
    container.appendChild(box);
};

const box = document.getElementById('container').querySelectorAll(".gridBox");
box.forEach(div => div.addEventListener('mouseover', () => {
        div.classList.add('hoverBox');
}));


box.forEach(div => div.addEventListener('mouseleave', () => {
        div.classList.remove('hoverBox'); 
}));

box.forEach(div => div.addEventListener('click', () => {
    div.style.backgroundColor = "lightblue";
}));


