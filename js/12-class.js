function Person(name, lastName, high) {
  this.name = name;
  this.lastName = lastName;
  this.high = high;
}
Person.prototype.greetings = function() {
  console.log(`Hi, my name's ${this.name} ${this.lastName}`)
}
Person.prototype.isHigh = () => {
  return this.high > 1.8
}
const Rojas = new Person('Luis', 'Rojas', 1.9);
const Pedro = new Person('Pedro', 'kuko', 1.7);
const Stephen = new Person('Stephen', 'kuka', 2);
