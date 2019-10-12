function solve (input){
let sum = input[0].reduce((a,b) => a + b);
let result = true;

for (let i = 0; i < input.length; i++){
    let rowSum = input[i].reduce((a,b) => a + b);
    let colSum = input.map((x) => x[i]).reduce((a,b) => a + b);

    if (rowSum !== colSum || rowSum !== sum || colSum !== sum) {
        result = false;
    }
}
    return result;
}

console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )) 

 