function solve (input) {
    let catalogue = {};

    for (let line of input) {
        let [systemName, componentName, subcomponentName] = line.split(" | ");
        if(!catalogue.hasOwnProperty(systemName)){
            catalogue[systemName] = {};
        }
        if(!catalogue[systemName].hasOwnProperty(componentName)){
            catalogue[systemName][componentName] = [];
        }
        catalogue[systemName][componentName].push(subcomponentName);
    }

    Object.entries(catalogue)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length)
    .forEach(system => {
        console.log(system[0]);
        Object.entries(system[1]).sort((a, b) => b[1].length - a[1].length)
            .forEach(component => {
                console.log(`|||${component[0]}`);
                component[1].forEach(e => console.log(`||||||${e}`));
            });
    });
}

solve(
    [
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Register Page',
    'SULS | Main Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'SULS | Judge Site | Login Page',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreA | A23',
    'Lambda | CoreA | A24',
    'Lambda | CoreB | B24',
    'Lambda | CoreC | C4',
    'Lambda | CoreA | A25',
    'Indice | Session | Default Security',
    'Indice | Session | Default Storage',
    ]
)