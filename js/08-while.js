const rojas = {
  name: 'Juan Luis',
  lastName: 'Rojas León',
  age: 19,
  weight: 70
}
console.log(`Start of year ${rojas.name} weight ${rojas.weight}`);
const WEIGHT = 0.3;
const gainWeight = person => person.weight += WEIGHT;
const decreaseInWeight = person => person.weight -= WEIGHT;
const eatALot = () => Math.random() < 0.3;
const doExercise = () => Math.random() < 0.4;
const GOAL = rojas.weight - 3;
let days = 0;

while (rojas.weight > GOAL) {
  if (eatALot()) {
    gainWeight(rojas);
  } else if (doExercise()) {
    decreaseInWeight(rojas);
  }
  days += 1;
}

console.log(`${days} days passed`);

console.log(`Start of year ${rojas.name} weight ${rojas.weight.toFixed(2)}`);