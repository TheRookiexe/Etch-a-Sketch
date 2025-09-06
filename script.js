const container = document.querySelector('.container');
const containerSize = 600;                                  
const colorPicker = document.querySelector('#colorPicker');
const slider = document.querySelector("#sketch-board-range");
const sliderOp = document.querySelector('#rangeValue');
const clear = document.querySelector("#refreshButton");

let mousedown = false;
document.addEventListener('mousedown', () => mousedown = true);
document.addEventListener('mouseup', () => mousedown = false);

function grids(n) {
    const boxSize = containerSize / n;

    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

        for (let j = 0; j < n; j++) {
            const grid = document.createElement('div');
            grid.classList.add('sqs');
            grid.style.width = `${boxSize}px`;
            grid.style.height = `${boxSize}px`;

            grid.addEventListener('mousedown', () => {
                grid.style.backgroundColor = colorPicker.value;
            });

            grid.addEventListener('mouseenter', () => {
                if (mousedown) {
                    grid.style.backgroundColor = colorPicker.value;
                }
            });

            row.appendChild(grid);
        }
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function buildGrid(n) {
    clearGrid();
    grids(n);
}

slider.addEventListener('input', () => {
    sliderOp.textContent = slider.value;
    buildGrid(parseInt(slider.value));
});

clear.addEventListener('click', () => {
    location.reload();
});

grids(16);
