function solve (input){
    return input.reduce((acc, curr, index) => { if (curr >= acc){acc.push(curr)}; return acc}, []);
}
console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ))