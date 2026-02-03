## Task 1: Predict Output of Async Code

### Code Block 3: Multiple Microtasks


```javascript
console.log("A");


Promise.resolve().then(function() {
 console.log("B");
  Promise.resolve().then(function() {
   console.log("C");
 });
  console.log("D");
});


Promise.resolve().then(function() {
 console.log("E");
});


setTimeout(function() {
 console.log("F");
}, 0);


console.log("G");
```


**Your Prediction (order):**
```
A G B D E C F
```

**Actual Output:**
```
A G B D E C F
```


**Explanation:**
```
here first Syncronous code runs and print A and G than both promise goes to microtask line by line and timeout goes to macrotask queue.
now when call stack is empty microtask runs first and prints B than nested Promise goes to back in microtask queue and next line prints D.
now next microtask runs and print E than other runs and print C.
at last when microtask is empty than macrotasks runs and print F.

```
