console.log('a');
// setTimeout(function() {
//   console.log('b');
// }, 0)
setTimeout(() => {
  console.log('print')
}, 2000);

for (let i = 0; i <= 10000000; i++) {
  console.log('d');
}
// DON'T DO IT