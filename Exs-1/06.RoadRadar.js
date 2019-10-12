function solve(arr){
let motorwayLimit = 130;
let interstateLimit = 90;
let cityLimit = 50; 
let residentialLimit = 20;
let result = '';

    if(arr[1] === 'motorway'){
        if((arr[0] - motorwayLimit) > 0 && (arr[0] - motorwayLimit) <= 20){
            result = 'speeding';
        } else if ((arr[0] - motorwayLimit) > 20 && (arr[0] - motorwayLimit) <= 40) {
            result = 'excessive speeding';
        } else if ((arr[0] - motorwayLimit) > 40) {
            result = 'reckless driving';
        }
    }
    else if(arr[1] === 'interstate'){
        if((arr[0] - interstateLimit) > 0 && (arr[0] - interstateLimit) <= 20){
            result = 'speeding';
        } else if ((arr[0] - interstateLimit) > 20 && (arr[0] - interstateLimit) <= 40) {
            result = 'excessive speeding';
        } else if ((arr[0] - interstateLimit) > 40) {
            result = 'reckless driving';
        }
    }
    else if(arr[1] === 'city'){
        if((arr[0] - cityLimit) > 0 && (arr[0] - cityLimit) <= 20){
            result = 'speeding';
        } else if ((arr[0] - cityLimit) > 20 && (arr[0] - cityLimit) <= 40) {
            result = 'excessive speeding';
        } else if ((arr[0] - cityLimit) > 40) {
            result = 'reckless driving';
        }
    }
    else{
        if((arr[0] - residentialLimit) > 0 && (arr[0] - residentialLimit) <= 20){
            result = 'speeding';
        } else if ((arr[0] - residentialLimit) > 20 && (arr[0] - residentialLimit) <= 40) {
            result = 'excessive speeding';
        } else if ((arr[0] - residentialLimit) > 40) {
            result = 'reckless driving';
        }
    }
    console.log(result)
}

solve([40, 'city'])
solve([21, 'residential'])
solve([120, 'interstate'])
solve([200, 'motorway'])
