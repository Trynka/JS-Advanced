function solve (input) {
    let step = Number(input.pop()) % input.length;
     
    for (let i = 0; i < step; i ++) {
        let elem = input.pop();
        input.unshift(elem);
    }
    return input.join(" ");
}

console.log(solve(['1', 
'2', 
'3', 
'4', 
'2']
))

console.log(solve(
    ['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
))