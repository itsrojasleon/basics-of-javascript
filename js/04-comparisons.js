let rojas = {
  name: 'Luis'
}
const otherRojas = {
  ...rojas
};

// console.log(rojas == otherRojas)
// console.log(rojas)
// console.log(otherRojas)

otherRojas.name = 'Pepe';
// console.log(rojas == otherRojas)
// console.log(rojas)
// console.log(otherRojas)

///////
const sameRojas = rojas;
console.log(rojas === sameRojas);
console.log(rojas);
console.log(sameRojas);
sameRojas.name = 'Jaimico';
console.log(rojas);
console.log(sameRojas);