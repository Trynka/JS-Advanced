function solve (input){
    let numMatrix = [];
    for (let row = 0; row < input.length; row++){
        numMatrix.push(input[row].split(' ').map((x) => Number(x)));
        
    }

    let leftDiagonal = numMatrix.map((x,i,arr) => arr[i][i]).reduce((a,b) => a +b, 0);
    let rightDiagonal = numMatrix.map((x,i,arr) => arr[i][arr.length-1-i]).reduce((a,b) => a + b);
    
    if(leftDiagonal === rightDiagonal){
        for (let row = 0; row < numMatrix.length; row++){
            for(let col = 0; col < numMatrix.length;col++){
                if( row !== col && col !== numMatrix.length-1-row){
                    numMatrix[row][col]= leftDiagonal;
                }
            }
        }
        numMatrix.forEach(x => console.log(x.join(' ')));
    } else {
        numMatrix.forEach(x => console.log(x.join(' ')));        
    }
}

solve(
    [   '5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1'
    ]
)

solve(
    [   '1 1 1',
        '1 1 1',
        '1 1 0'
    ]
)