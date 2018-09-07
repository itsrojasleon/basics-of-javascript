const rojas = {
  name: 'Juan Luis',
  lastName: 'Rojas León',
  age: 19,
  weight: 70
}
console.log(`Start of year ${rojas.name} weight ${rojas.weight}`);
const WEIGHT = 0.2;
const gainWeight = person => person.weight += WEIGHT;
const decreaseInWeight = person => person.weight -= WEIGHT;

for(i = 0; i <= 360; i++) {
  const random = Math.random();
  if (random < 0.25) {
    gainWeight(rojas);
  }else if (random < 0.50) {
    decreaseInWeight(rojas);
  }
}

console.log(`Start of year ${rojas.name} weight ${rojas.weight.toFixed(2)}`);