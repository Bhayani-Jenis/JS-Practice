// const user = {
//     name: "Alex",
//     greet: () => {
//         console.log("Hello, " + this.name);
//     }
// };
// user.greet();


//--------------------EXPLANATION WHY ABOVE CODE FAILS-------------------
//it logs undefined beacuse here we use a arrow function[()=>{}] to define a function and their behavior is like it takes 
//most outer global scope to find this keyword variable it doesn't search for a their functional scope so here 
// no global scope varible is defined so it gives undefined


///--------------FIXED-----------------------

const user = {
    name: "Alex",
    greet: function () {
        console.log("Hello, " + this.name);
    }
};
user.greet();

// here we remove arrow function and instead of those we use simpler function so it gives a Alex name in output behalf of undefined














