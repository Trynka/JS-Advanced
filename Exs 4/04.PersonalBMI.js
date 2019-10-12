function solve(...input){
    let person = {
        name: input[0],
        personalInfo: {
            age: input[1],
            weight: input[2],
            height: input[3]
        },
        BMI: Math.trunc()
    }

    return person;
}

console.log(solve('Peter', 29, 75, 182))