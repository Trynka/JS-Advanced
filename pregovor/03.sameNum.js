function sameNum (num) {
let digits = Array.from(String(num), Number);
let result = false;

let sum = digits.reduce((a,b) => a+b)
let control = sum/digits.length;
if (digits[1] == control || num === 0) {
 result = true;
}

console.log(result);
console.log(sum);
}

sameNum(000000)