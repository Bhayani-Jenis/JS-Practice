## Task 2: setTimeout Examples

### Exercise 3: setTimeout with Clear


**Task:** Create a countdown timer that counts from 10 to 0, then stops.


```javascript
// TODO: Implement countdown function
function countdown(start) {
 // Your code here
 // Should log numbers from start to 10, with 1 second between each
 // Should stop at 0
console.log(start--)
let intervalId=setInterval(()=>{
    if(start+1){
        console.log(start--);
    }
    else{
        clearInterval(intervalId);
    }
 },1000)
}


countdown(10);
// Expected output:
// 10 (immediately)
// 9  (after 1 second)
// 8  (after 2 seconds)
// ...
// 0  (after 10 seconds)
```



