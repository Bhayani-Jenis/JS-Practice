function wait(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("2 seconds passed")
        },ms)
    })
}
wait(2000)
.then(console.log)