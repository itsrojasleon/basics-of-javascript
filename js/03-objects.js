let rojas = {
  otherObject: {
    name: 'Juan Luis',
    lastName: 'Rojas León',
    edad: 28,
  }
} 
function printName({ lastName }) {
  // console.log(lastName);
}
printName(rojas);

// Destructuring
function print({ otherObject: { name, lastName } }) {
  console.log(name);
}
print(rojas);