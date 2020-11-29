function gcd (a,b) {
let result = 0;

while(b) {
    var t = b;
    b = a % b;
    a = t;
}
  console.log (a);
}

gcd(2154, 458)