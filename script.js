const container = document.querySelector('.container');

function grids(n,k){
    for(let i=0; i<n; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.append(row);
        for(let j=0; j<k; j++){ 
            const grid = document.createElement('div');
            grid.classList.add('sqs');
            row.append(grid);
        }
    }
}

grids(16,16);

let mousedown = false;
document.addEventListener('mousedown', ()=>{
    mousedown = true;
});
document.addEventListener('mouseup', ()=>{
    mousedown = false;
});

const boxes = document.querySelectorAll('.sqs');
boxes.forEach(box => {
    box.addEventListener('mousedown', ()=>{
        box.style.backgroundColor = 'yellow';
    });

    box.addEventListener('mouseenter', ()=>{
        if (mousedown){
            box.style.backgroundColor = 'yellow';
        }
    });
});

const slider = document.querySelector("#sketch-board-range");
const sliderOp = document.querySelector('#rangeValue');

function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function buildGrid(n){
    clearGrid();
    grids(n,n);
    const boxes = document.querySelectorAll('.sqs');
    boxes.forEach(box => {
        box.addEventListener('mousedown', ()=>{
            box.style.backgroundColor = 'yellow';
        });

        box.addEventListener('mouseenter', ()=>{
            if (mousedown){
                box.style.backgroundColor = 'yellow';
            }
        });
    });
}

slider.addEventListener('input', ()=>{
    sliderOp.textContent = slider.value;
    buildGrid(parseInt(slider.value));
});

const clear = document.querySelector("#refreshButton");
clear.addEventListener('click', ()=>{
    location.reload();
});
