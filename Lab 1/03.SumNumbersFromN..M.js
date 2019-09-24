function sumNumbers(n,m){
    let result = 0;
    let a = +n;
    let b = +m;

    for(let i = a; i <= b; i++) {
        result += i;
    }
    console.log(result);
}
sumNumbers(`1`, `5`)