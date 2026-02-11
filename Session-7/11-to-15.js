// Q11. The Nested Timeout

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');

//Output:-A E C D B
//here first sync task prints so a and e logs out than microtask like promises resolves and prints c and than again other promise resolve 
//so it logs d after call stack and microtask queue is empty than mactotask queue come into picture and prints b.
//--------------------------------------------------------------------------------------------------------------------------------



// Q12. Explicit Binding (Call/Apply)

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);
showId.apply(null);

// Output:- 101 undefined
//here first time function is called with agent object so it print this.is as a agent.id so it is 101
//in second function call with apply method but the null object has no this so it logs undefined

//--------------------------------------------------------------------------------------------------------------------------------

// Q13. Promise.all Failure

Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
.then(res => console.log("Result:", res))
.catch(err => console.log("Caught:", err));

//Output:-Caught: Error 1
//in promise .all() if one of the promise is rejected than the final result goes in catch block and prints th error
//it does not care about other resolved promises
//--------------------------------------------------------------------------------------------------------------------------------


// Q14. The "Callback" Context Trap

const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore();

//Output:-undefined
// here updatescore function is called by player but the inner function which is in settimeout has a updatescore block so they does not have access   
//of score so it prints undefined
//
//--------------------------------------------------------------------------------------------------------------------------------

// Q15. Throwing Inside a Chain

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));

// Output:-Caught Error, 10
//here promise is resolved directly with value 1 and goes to next than block
//than block raise new error so it goes the catch block with err value Invalid and logs from catch block Caught Error 
//but catch block return 10 value so it continue chain and goes to next than block and print 10;
//
