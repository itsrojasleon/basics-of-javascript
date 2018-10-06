function Person(name, lastName, high) {
  this.name = name;
  this.lastName = lastName;
  this.high = high;
}
Person.prototype.saludar = function() {
  console.log(`Hi, my name's ${this.name} ${this.lastName}`)
}
Person.prototype.isHigh = function() {
  if (this.high > 1.8) 
    console.log(`${this.name} is Very high`);
  else 
    console.log(`${this.name} is normal`);
}
const Rojas = new Person('Luis', 'Rojas', 1.9);
const Pedro = new Person('Pedro', 'kuko', 1.7);
const Stephen = new Person('Stephen', 'kuka', 2);


// Rojas.saludar();
Rojas.isHigh();
Pedro.isHigh();
Stephen.isHigh();