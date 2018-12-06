const API_URL = 'https://swapi.co/api/';
const PEOPLE = 'people/:id';

// const request = async (id) => {
//   const res = await fetch(`${API_URL}${PEOPLE.replace(':id', id)}`, { crossDomain: true });
//   const data = await res.json();
//   return data;
// }
// Promise.all([request(1), request(2), request(3)]).then((data) => {
//   console.log(data);
// });

const request = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(`${API_URL}${PEOPLE.replace(':id', id)}`, { crossDomain: true });
      const data = await res.json();
      resolve(data);
      
    }catch(e) {
      reject(id);
    }
  });
}