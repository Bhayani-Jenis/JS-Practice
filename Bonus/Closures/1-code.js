// //1-function
// function counter() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     }
// }

// const c = counter();
// c(); // 1
// c(); // 2
// c(); // 3

// const d = counter();
// d(); // 1



// //2-code improved
// const user = {
//     name: "JS",
//     greet() {
//         return () => {
//             console.log(this.name);
//         };
//     }
// };

// user.greet()(); // should print "JS"


// //3-output
// // undefined error
// //3-chnage code
// var a = 10;
// let b = 20;
// function test() {
//     console.log(a);
//     console.log(b);


// }
// test();


//4-async-for-not use let
// for (var i = 0; i < 3; i++) {
//     setTimeout(function (i) {
//          console.log(i); 
//         }, 1000,i)
// }


// function once(fn) {
//     let c = 1
//     let ans;
//     return function (x) {
//         if (c) {
//             c = !c
//             ans = fn(x)            
//         }
//         console.log(ans);
//     }
// }


// const init = once(function (x) {
//     console.log("called");
//     return x * 2;
// });

// init(5);   // logs "called", returns 10
// init(100); // does NOT log, returns 10


// function A(){

// }
// function mynew(A,...args){
//     let s={}
//     s=Object.create(A.prototype)
//     let b=A.apply(s,[...args])
//     if(b!==null && typeof b==='object' &&  b!=='function') return b
//     return s;
// }
// let obj=mynew(A)

const a = Object.create({ x: 1 });
console.log(a.hasOwnProperty("x"));


