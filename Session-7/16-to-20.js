
// Q16. Async Function Order

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");

//Output:-C A B D

//here first syncronous task runs so C prints and than foo function calls and it runs untill promise or any async activity finds so 
//it prints A first than goes to microtask and than prints D
//now call stack is empty and microtask runs so than B prints 

//--------------------------------------------------------------------------------------------------------------------------------
// Q17. The "Finally" Gotcha

Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res));

//Output:-CleanUp , Done
//here first promise is resolved and goes to finally block it prints Clean up but the return in finally block is ignored because 
//it does not chnage in resolved message and than goes to next than block and print "Done".
//(Resource ::Gpt)


//--------------------------------------------------------------------------------------------------------------------------------
// Q18. Variable Hoisting & Promises

console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

a = 10;

//Output:-undefined 10
// here a is logged before initiallization but var is function scope so it gives undefined and than promise goes to microtask 
//and all other sync task occurs and last a=10 is execute in call stack than promise resolves and a prints value 10



//--------------------------------------------------------------------------------------------------------------------------------
// Q19. Microtask vs Macrotask Interleaving

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");

//Output:-End,p1,p2,t1,t2
//here global log is only sync task so it runs first nd prints End first than here first timeout goes to macrotask queue than both promise goes microtask
//microtask queue execute first and prints p1 first and settimeout goes to macroqueue after t1 timeout than second promise resolve and print p2 
//than macrotask execute one by one and print t1 and t2 afterwards
//--------------------------------------------------------------------------------------------------------------------------------
// Q20. Object Method Assigned to Class

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p();

//Output:-Sarah
//here arrow function has no 'this' of their own intead of it use 'this' where they created, in this case it uses this of Manager
//and prints Sarah name when p function is called(Resource:-GPT)
//