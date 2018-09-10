let count = 0;
const rains = () => Math.random() < 0.25;

do {
  count++;
}while(!rains());

console.log(`${count}`, count === 1 ? 'vez' : 'veces');