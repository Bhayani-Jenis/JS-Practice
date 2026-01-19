// join and split method

const s="hey how are you";

const a=s.split(" ");
const char=s.split("");
console.log(char);
// output---
// [
//   'h', 'e', 'y', ' ',
//   'h', 'o', 'w', ' ',
//   'a', 'r', 'e', ' ',
//   'y', 'o', 'u'
// ]

console.log(a);
// output---
// [ 'hey', 'how', 'are', 'you' ]

const b=a.join("-");
console.log(b);
// output---
// hey-how-are-you


//explanation

// here the split mathod is apply on string to split each word or character based on the character which we given in the argument



