// Q6. The "Lost" Context

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

const print = user.printName;
print();

//Output:-undefined
//whenever we tranfer a reference of function to any other variable than their object's values does not pass only function reference is pssed
//so whenver we called those variable than for for those call function has no 'this',so it prints undefined 
//--------------------------------------------------------------------------------------------------------------------------------


// Q7. Event Loop Basic Race

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

//Output:-Start, End ,Promise,Timeout

//first of all all syncronous task runs so settime out goes to the macrotask queue and promise goes to microtask queue and first
//Start is print than both asyncronous task goes to their queue and End is printed
//than after call stack is empty, microtask runs and Promise is prints 
//than macrotask runs and timeout prints

//       call stack   >>>    microtasks     >>>      macrotasks
//--------------------------------------------------------------------------------------------------------------------------------

// Q8. Arrow Function Pitfall

const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};

group.getTitle();

//Output:-undefined

//here the used function is arrow function and arrow function has a no this of their own it borrow from their laxical scope 
//since here their is no laxical scope avilable or(global scope has no title variable) so it prints undefined
//
//


//--------------------------------------------------------------------------------------------------------------------------------

// Q9. Chaining Returns

Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));

//Output:-5 10

//here promise is resolved with value 5 and it goes to next  than block and prints value 5 than it goes to next than block with value 5=5=10
// and than it prints 10


//--------------------------------------------------------------------------------------------------------------------------------

// Q10. Catch and Continue

Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));

//output:- Fail,Recovered


//promise is reject with message Fail and goes to catch block and it prints err message "Fail "
//but here catch block return Recovered And it goes to next than block so it prints Recovered in than block
//here return in catch block indicates the recoverry of chain and it goes to next than block
//