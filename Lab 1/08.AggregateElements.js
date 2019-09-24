function solve(arr){
    let sum = 0;
    let reversSum = 0;
    let concat = ``;
   
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        reversSum += 1/arr[i];
        concat = concat + arr[i];
    }
    
    console.log(sum)
    console.log(reversSum)
    console.log(concat)
}

solve([1, 2, 3])