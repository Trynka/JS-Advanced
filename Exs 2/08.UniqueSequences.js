function solve(input){
    let nestedArrays = input.map(JSON.parse).map((x) => x.sort((a,b) => b - a));
    let uniqueArrays = [];
    for (let arr of nestedArrays){
        let containsArr = uniqueArrays.some((x) => x[0] == arr[0]);
        if(!containsArr && arr.length > 0){
            uniqueArrays.push(arr);
        }
    }

   let sortedUniques = uniqueArrays.sort((a,b) => a.length - b.length)
                                   .map((arr) => `[${arr.join(", ")}]`)
                                   .join("\n");
    return(sortedUniques);
}

console.log(solve([
    '[]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
  ])
)