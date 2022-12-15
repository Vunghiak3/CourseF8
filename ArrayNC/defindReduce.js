// Array.prototype.reduce2 = function (callback, result) {
//   let i = 0;
//   if (arguments.length < 2) {
//     i = 1;
//     result = this[0];
//   }
//   for (; i < this.length; i++) {
//     result = callback(result, this[i], i, this);
//   }
//   return result;
// };

// const numbers = [1, 2, 3, 4, 5];

// var result = numbers.reduce2((total, num) => {
//   return total + num;
// }, 10);
// console.log("🚀 ~ file: defindReduce.js:6 ~ result ~ result", result);

var arr = [
  ["name", "Sơn Đặng"],
  ["age", 18],
];

function arrToObj(lst) {
  return lst.reduce((arr, item)=>{
    return {...arr, [item[0]]:item[1]}
  }, [])
}
console.log(arrToObj(arr));
