function solve (input){
    let result = input.reduce((acc, curr, index) => {if (curr >= Math.max(...acc)){acc.push(curr)}; return acc}, []);
    return result.join('\n');
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

console.log(solve([1, 
    2, 
    3,
    4]
    ))

console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ))