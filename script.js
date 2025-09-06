const container = document.querySelector('.container');

function grids(n,k){
    for(let i=0; i<n; i++){
        const row = document.createElement('div')
        row.classList.add('row')
        container.append(row)
        for(let j=0; j<k; j++){ 
            const grid = document.createElement('div');
            grid.classList.add('sqs');
            row.append(grid);
        }
    }
}

grids(16,16);