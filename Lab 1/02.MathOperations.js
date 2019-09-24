function operations(operator, ...params){
    return params.reduce((a, b) => eval(`${a} ${operator} ${b}`), params.shift());
}

console.log(operations("-", 1, 2, 4, 5))

function solve(a, b, operator){
    let result;
    switch (operator){
    case '+': result = a+b; break;
    case '-': result = a-b; break;
    case '*': result = a*b; break;
    case '%': result = a%b; break;
    case '/': result = a/b; break;
    case '**': result = a**b; break;
    }
    console.log(result)
}

solve (1, 2, "+")
