class Person {
  constructor(name, lastName, high) {
    this.name = name;
    this.lastName = lastName;
    this.high = high;
  }
  greetings() {
    console.log(`Hi, my name's ${this.name} ${this.lastName}`)
  }
  isHigh() {
    return this.altura > 1.8;
  }
}

class Developer extends Person {
  constructor(name, lastName, high) {
    super(name, lastName, high);
  }
  greetings() {
    console.log(`Hi, my name's ${this.name} ${this.lastName} and I am Developer`)
  }
}

const Rojas = new Person('Luis', 'Rojas', 1.9);

