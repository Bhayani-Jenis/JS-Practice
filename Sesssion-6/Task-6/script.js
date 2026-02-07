function step1(callback) {
    setTimeout(() => {
        console.log("this is step 1");
        callback()
    }, 1000)
}
function step2(callback) {
    setTimeout(() => {
        console.log("this is step 2");
        callback()
    }, 1000)
}
function step3(callback) {
    setTimeout(() => {
        console.log("this is step 3");
            callback()
    }, 1000)
}
function alltaskdone(){
    console.log("All Task Done");
    
}

step1(()=>step2(()=>step3

(()=>alltaskdone())))





