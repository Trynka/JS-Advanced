function solve(arr){
    let income = 0;
    for(let i = 0; i < arr.length; i++){
        let order = arr[i].split(', ');
        let cost = 0;
        let budget = Number(order[0]);
        let drink = order[1];
        
        if(drink === 'coffee'){
            let kind = order[2];
            if(kind === 'caffeine'){
                cost += 0.80;
            }
            else if(kind === 'decaf'){
                cost += 0.90;
            }

            if(order[3] === 'milk'){
                cost += Number((cost * 0.10).toFixed(1));
            }
        }

        if(drink === "tea") {
            cost += 0.80;

            if(order[2] === 'milk'){
                cost += Number((cost * 0.10).toFixed(1));
            }
        }

        let sugar = Number(order[order.length -1]);
            if(sugar !== 0){
                cost += 0.1;
            }
      
        if((budget-cost) < 0){
            console.log(`Not enough money for ${drink}. Need $${Math.abs(budget - cost).toFixed(2)} more.`)
        }
        else {
            income += cost;
            console.log(`You ordered ${drink}. Price: $${cost.toFixed(2)} Change: $${Math.abs(budget - cost).toFixed(2)}`)
        }
    }
    console.log(`Income Report: $${income.toFixed(2)}`)
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0'])
solve(['8.00, coffee, decaf, 4', '1.00, tea, 2'])