## Task 1: Predict Output of Async Code


### Objective
Predict the execution order of asynchronous code involving Promises, setTimeout, and the event loop.


### Requirements
1. Predict the output order for each code block
2. Run the code and compare with your prediction
3. Explain the execution order based on the event loop


### Code Block 1: Basic Async


```javascript
console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


Promise.resolve().then(function() {
 console.log("3");
});


console.log("4");
```


**Your Prediction (order):**
```
// 1,4,3,2
```


**Actual Output:**
```
// Run and write the actual order
// 1,4,3,2
```


**Explanation:**
```
// Explain the execution order

here first syncronous tasks runs and asyncronous tasks goes to web api and then micro or macro queue so it prints first 1 and 4 than microtask promise it prints 3 and then macrotask queue so it prints 2 at last
```
