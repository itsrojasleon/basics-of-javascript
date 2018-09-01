// Basics
let name = 'Luis', age = 19;

function printAge(n , a) {
  // console.log(`${n} is ${a} years old`);
}
printAge('Rojas', 19);

// Better way
function printNameUpperCase(name) {
  name = name.toUpperCase();
  console.log(name);
}
printNameUpperCase(name);