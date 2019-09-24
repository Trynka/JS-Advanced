function solve(a,b,c){
    let weight = b /1000.;
    let money = weight * c;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${a}.`)
}

solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)