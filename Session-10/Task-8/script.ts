function showData(name:string,age?:number):string{
    if(!age) return `username is ${name}`
    return `username is ${name} and age is ${age}`
}
console.log(showData("jd"));
console.log(showData("jd",90));



// How does TypeScript enforce correctness here?
//here if we give first parameter any number or any other type 
// rather than string it gives us compile time error


