## Task 1: Predict Output of Async Code


### Code Block 5: Async/Await


```javascript
console.log("Start");


async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}


asyncFunction();


Promise.resolve().then(function() {
 console.log("Promise 1");
});


setTimeout(function() {
 console.log("Timeout");
}, 0);


console.log("End");
```


**Your Prediction (order):**
```
Start
Async 1
End
Async 2
Promise 1
Timeout
```


**Actual Output:**
```
Start
Async 1
End
Async 2
Promise 1
Timeout
```


**Explanation:**
```
here first Start prints as syncronous code.
now when function asyncFunction is called it runs as syncronous code until any Async statement is find so it imediatly prints Async 1 and then Promise is find in function and all below code in function is goes to microtask.than promise goes to microtask and timeout goes to macrotask and End is print as syncronous code.

now microtask queue runs and print Async 2 and Promise line by line and after it is empty than macrotask runs and print Timeout
```
