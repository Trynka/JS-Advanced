function solve (input) {
    let result = input.sort()
                      .sort((a,b) => a.length - b.length);
    return result.join("\n");
}

console.log(solve(['test', 
'Deny', 
'omen', 
'Default']
))