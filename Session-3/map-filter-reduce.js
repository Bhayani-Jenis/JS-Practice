const a=[1,2,3,4]

const b=a.map((x)=>x*2)
console.log(b);
//output---
//[ 2, 4, 6, 8 ]

//here the resultant array has a same length as actual array
//but the element are diff based on our operation which we defined in map

const c=a.filter((x)=>x%2)
console.log(c);
//output
//[ 1, 3 ]

//in filter resultant array has less than or equal length of the actual array
//elements are filterd based on the condition

const d=a.reduce((acc,total)=>{
    acc+=total;
    return acc;
},0)

console.log(d);
//output----
//10


// reduce method convert whole arrays in single items based on function which we provided and it takes two argument 
// accumulater holds the starting value and other is for iteration items.
