const rojas = {
  age: 19,
};
const william = {
  age: 17,
}

const adult = ({ age }) => age >= 18 ? true : false; 

const access = (func) => func ? 'YES' : 'NOPE';

access(adult(rojas));
