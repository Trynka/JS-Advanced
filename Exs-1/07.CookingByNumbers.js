function solve(arr){
    let num = Number(arr[0]);
    let result = [];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] === 'chop'){
            num /= 2;
            result.push(num);
        }
        else if(arr[i] === 'dice'){
            num = Math.sqrt(num);
            result.push(num);
        }
        else if(arr[i] === 'spice'){
            num++;
            result.push(num);
        }
        else if(arr[i] === 'bake'){
            num *= 3;
            result.push(num);
        }
        else if(arr[i] === 'fillet'){
            num -= num * 0.2;
            result.push(num);
        }
    }

    console.log(result.join("\n"))
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])