const rojas = {
  name: 'Luis',
  lastName: 'Rojas',
  age: 19,
  engineer: false, 
  chef: false,
  singer: false,
  dj: false,
  guitarist: false,
  developer: true
}
function adult({ name, age }) {
  if (age >= 18) console.log('Adult');
  else console.log('Young');
}
adult(rojas);