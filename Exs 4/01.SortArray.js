function solve (input, str){
    const commands = {
        asc: (arr) => arr.sort((a, b) => a - b),
        desc: (arr) => arr.sort((a,b) => b - a)
    }
   
    let result = commands[str](input);
    return result;
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));