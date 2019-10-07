function solve (input) {
    let step = Number(input.pop());
    let mod = 0;
    if (input.length > step){
        mod = step;
    } else {
        mod = (step - input.length) % input.length;
    }
 
    for (let i = 0; i < mod; i ++) {
        input.unshift(input.pop());
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