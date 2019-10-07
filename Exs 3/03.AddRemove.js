function solve (input) {
    let starter = 0;
    let arr = [];
    
    for (let i = 0; i < input.length; i++) {
        starter++;
        if(input[i] == 'add'){
            arr.push(starter);
        } else if (input[i] == 'remove' && arr.length > 0){
            arr.pop()
        }
    }
    if(arr.length === 0){
        return "Empty";
    }
    return arr.join("\n");
}

console.log(solve(['remove', 
'remove', 
'remove']
))