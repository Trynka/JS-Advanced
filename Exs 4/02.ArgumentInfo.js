function solve (...input){
    let typesValues = input.map(x => `${typeof(x)}: ${x}`). join('\n');
    let typeCounts = Object.entries(input.reduce((acc, curr) => {
        let type = typeof curr;
        if(!acc.hasOwnProperty(type)){
            acc[type] = 0;
        }
        acc[type]++;
        return acc;}, {}))
        .sort((a,b) => b[1] - a[1]).map(([type, value]) => `${type} = ${value}`).join('\n');
    
    let result = `${typesValues} \n${typeCounts}`
    return result;
}

console.log(solve('cat', 'dog', 42, 53, 12, function () { console.log('Hello world!'); }))