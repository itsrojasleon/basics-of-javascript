class Person {
  constructor(name, lastName, high) {
    this.name = name;
    this.lastName = lastName;
    this.high = high;
  }
  greetings(fn) {
    // console.log(`Hi, my name's ${this.name} ${this.lastName}`);
    if (fn) {
      fn(this.name, this.lastName);
    }
  }
  isHigh() {
    return this.altura > 1.8;
  }
}

class Developer extends Person {
  constructor(name, lastName, high) {
    super(name, lastName, high);
  }
  greetings(fn) {
    // console.log(`Hi, my name's ${this.name} ${this.lastName} and I am Developer`);
    if (fn) {
      fn(this.name, this.lastName, true);
    }
  }
}

function respond(name, lastName, isDev) {
  console.log(`Good morning ${name} ${lastName}`);
  if (isDev) {
    console.log(`No way! You are a developer!`);
  }
}

const Rojas = new Person('Luis', 'Rojas', 1.9);
const Stephen = new Developer('Stephen', 'Grider', 2);

Rojas.greetings(respond);
Stephen.greetings(respond);

