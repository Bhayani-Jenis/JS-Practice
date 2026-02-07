function tossCoin(){
    return new Promise((resolve,reject)=>{
        let a=Math.random(
            
        )
        if(a>0.5)resolve("Heads")
        else reject("Tails")    
    })
}

tossCoin()
.then(res=>console.log(res))
.catch(e=>console.log(e))