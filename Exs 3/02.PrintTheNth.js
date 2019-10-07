function solve(input){
    let step = Number(input.pop());
    let arr = [];
    for (let i = 0; i < input.length; i+= step){
        arr.push(input[i]);
    }
    return arr.join("\n");
}
console.log(solve([
    '5', 
    '20', 
    '31', 
    '4', 
    '20', 
    '2']
))