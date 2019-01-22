const R = require('ramda');
const greet = R.replace(R.__, R.__, '{hello} Tuan , {hello} Huan');
console.log(greet(/{hello}/g)('Hello'));


//add
const add = R.add(2, 20);
//console.log(add);
const subtract = R.subtract(1, 10);
//console.log(subtract);

//add index
const mapIndexed = R.addIndex(R.map);
const map = mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
//console.log(map);


//addjust
const a = R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);
const b = R.adjust(2, R.toUpper, ['a', 'b', 'c', 'd']);
console.log(b);

//console.log(greet('Alice'));