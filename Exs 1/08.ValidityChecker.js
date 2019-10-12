function solve(arr){
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    
    let firstDist = Math.sqrt(Math.pow(x1,2) + Math.pow(y1,2));
    let secondDist = Math.sqrt(Math.pow(x2,2) + Math.pow(y2,2));
    let thirdDist = Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2));

    if(Number.isInteger(firstDist)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    if(Number.isInteger(secondDist)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    if(Number.isInteger(thirdDist)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

solve([3, 0, 0, 4])
solve([2, 1, 1, 1])