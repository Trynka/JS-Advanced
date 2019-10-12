function solve (arr){
    let keys = [];
    let values = [];
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            keys.push(arr[i]);
        } else {
            values.push(Number(arr[i]));
        }
    }
    for(let i = 0; i < keys.length; i++){
        obj[keys[i]] = values[i];
    }

    console.log(obj)
}
solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52])
solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42])