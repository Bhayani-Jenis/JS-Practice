## Task 1: Predict Output of Async Code

### Code Block 4: Complex Async Chain


```javascript
console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


queueMicrotask(function() {
 console.log("3");
});


Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});


setTimeout(function() {
 console.log("6");
}, 0);


console.log("7");
```


**Your Prediction (order):**
```
1 7 3 4 5 2 6
```


**Actual Output:**
```
1 7 3 4 5 2 6
```


**Explanation:**
```
here first syncronous task runs and prints 1 and 7 and all other between code is asyncronous so it goes to microtask and macrotask so settimeout tasks goes in macrotask queue and other promises and queueMicrotask goes into microtask queue.

first microtask queue runs and print 3 and 4 than other queueMicrotaskgoes in microtask queue and it runs and print 5
after microtask queue is empty than macrotask queue runs and prints 2 and 6 one by one.
```
