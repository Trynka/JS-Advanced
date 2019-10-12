function solve(input){
    let ordered = input.sort((a,b) => a.localeCompare(b)).sort((a,b) => a.length - b.length);
    let noDuplicates = [];
    for (let i = 0; i < ordered.length; i++){
      if(!noDuplicates.includes(ordered[i])){
          noDuplicates.push(ordered[i]);
      }
    }

    return noDuplicates.join("\n");
}

console.log(solve(
    [
        'Ashton',
        'Kutcher',
        'Ariel',
        'Lilly',
        'Keyden',
        'Aizen',
        'Billy',
        'Braston',
        'Ashton',
    ]
))

