function solve(r){
    let rType = typeof(r);
    if(rType === `number`){
        let result = 0;
        result = Math.pow(r,2) * Math.PI;
        console.log(result.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${rType}.`)
    }
}

solve(5)
solve(`name`)