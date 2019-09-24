function solve(a){
    let str = a.toString();
    let arr = [];
    for(let i = 0; i < str.length; i++){
        arr.push(str[i]);
    }
    let result = arr.reduce((a,b) => a + Number(b), 0)
    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    let unique = arr.filter(onlyUnique);
    
    if(unique.length === 1){
        console.log(`true`)
    }
    else{
        console.log(`false`)
    }
    console.log(result)
}

solve(2222222)
solve(1234)
