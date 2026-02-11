## Task 1: Predict Output of Async Code

### Code Block 2: Nested Async


```javascript
console.log("Start");


setTimeout(function() {
 console.log("Timeout 1");
  Promise.resolve().then(function() {
   console.log("Promise 1");
 });
}, 0);


Promise.resolve().then(function() {
 console.log("Promise 2");
  setTimeout(function() {
   console.log("Timeout 2");
 }, 0);
});


console.log("End");
```


**Your Prediction (order):**
```
Start
End
Promise 2
Timeout 1
Promise 1
Timeout 2
```


**Actual Output:**
```
Start
End
Promise 2
Timeout 1
Promise 1
Timeout 2
```


**Explanation:**
```
here Start and end both Syncronous code runs first and promise goes to microtask queue and timeout goes to macrotask queue.
first microtask queue runs and print Promise 2 than it send timeout function to macrotask queue.
now macrotask runs(because microtask queue is empty) and print timeout 1 and promise is goes to microtask queue.
than microtask queue runs and print Promise 1 and at last macrotask queue runs and print timeout 2

```
