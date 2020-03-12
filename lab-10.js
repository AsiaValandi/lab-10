var city1 = {};
city1.name = 'Город N';
city1.population = 1000000;

var city2 = {
    name: 'Город M',
    population: 10^6,
};

function getName() {
    return this.name;
};
function exportStr() {
    return `name = ${this.name}\npopulation = ${this.population}\n`;
};

city1.getName = getName;
city1.exportStr = exportStr;

city2.getName = getName;
city2.exportStr = exportStr;
line = "-".repeat(20);
console.log(city1.getName()+'\n'+line+'\n'+ city1.exportStr()+line);
console.log(city2.getName()+'\n'+line+'\n'+ city2.exportStr()+line);




