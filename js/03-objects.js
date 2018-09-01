let rojas = {
  name: 'Juan Luis',
  lastName: 'Rojas León',
  edad: 28,
} 
function printName({ lastName }) {
  console.log(lastName);
}
printName(rojas);