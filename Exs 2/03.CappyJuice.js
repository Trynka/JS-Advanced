function solve(input){
  let juices = {};
  let bottles = {};

  for (let line of input) {
      let [name, quantity] = line.split(" => ");
      quantity = Number(quantity);

      if(!juices.hasOwnProperty(name)){
          juices[name] = 0;
      }
      juices[name] += quantity;

      if(juices[name] >= 1000){
          bottles[name] = Math.trunc(juices[name] / 1000);
      }
  }

  let keys = Object.keys(bottles);
  for (let name of keys) {
      let quan = bottles[name];

      console.log(`${name} => ${quan}`);
  }
}

solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
])