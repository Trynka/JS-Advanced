function walk (num, meter, speed) {
let newSpeed = (speed * 5)/18;
let distance = num * meter;
let breakTime = distance / 500 * 60;
let timeSeconds = distance / newSpeed + breakTime; 

let hours = timeSeconds / 3600;
let minutes = timeSeconds / 60;


console.log(timeSeconds);
}

walk (4000, 0.60, 5)