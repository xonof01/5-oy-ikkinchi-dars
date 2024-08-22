//  5-oy ikkinchi vazifam
 // 1 misol
// function name(arg) {
//   return arg.sort((a,b) => b.length - a.length);
// }
// let sum = ['salom','xayr','qalesizlar']
// let res = name(sum);
// console.log(res);
// 2 misol

// function name(arg) {
//   return arg.split(' ').map(arr => arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase()).join(' ');
// }

// let sum = name('salom xayr');
// console.log(sum);

// 2-savol



// 3 misol
// let res = ('s5a6l8o8m');
// function name(str) {
//   let arr = '';
//   for (const char of str) {
//       if (char < '0' || char > '9') {
//           arr += char;
//       }
//   }
//   return arr;
// }
// console.log(name(res));

// 4 misol

// let res = [,1,2,3,4,5,'salom',true,'xayr']
// function name(arg) {
//   return arg.filter(arr => typeof arr === 'string')

// }
// console.log(name(res));

// 5 misol
// function name(arg) {
//     let arr = arg.split(' ');
//     arr = arr.map(function(value){
//       return value.split('').reverse().join('')

//     })
//     return arr.join(' ').length
// }

// console.log(name['salom xayr']);

// 6 misol

// let res = [, 1, 2, 3, 4, 5, "salom", true, "xayr", 'bolalar','ha'];

// function name(arg) {
//   let res = arg.filter((item) => typeof item === "string");

//   let arr = res.sort((a, b) => a.length - b.length);

//   return arr;
// }

// console.log(name(res));

// 7 misol

// let res = "salom bolalar";
// let sum = ("a,e,i,o,u,A,E,I,O,U");
// let res1 = "";
// function name(arg) {
//   for (const iterator of arg) {
//     if (!sum.has(iterator)) {
//       res1 += iterator;
//     }
//   }

//   return res1;
// }
// console.log(name(res1));

// 8 misol

// 9 misol

// function name(arg) {
//     let arr = arg.split(' ');
//     arr = arr.map(function(value){
//       return value.split('').reverse().join('')

//     })
//     return arr.join(' ')
// }

// console.log(name('salom bolalar'));

// 10 misol
//   function name(arg, arg1) {
//     let res = arg.filter(arr => arr === arg1);
//     return res.length;
// }

// let arg = ['a','b','v','c','b','a'];
// let arg1 = 'a';

// console.log(name(arg, arg1));
