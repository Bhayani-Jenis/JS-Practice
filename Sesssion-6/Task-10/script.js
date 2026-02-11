function simulateTask(name, delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(name)},delay)
    })
}

async function parta() {
    console.log(await simulateTask('part:A task:1',1000));
    console.log(await simulateTask('part:A task:2',1000));
    console.log(await simulateTask('part:A task:3',1000));
    
}
parta()


async function partb() {
    let a=await Promise.all([simulateTask('part:B task:1',1000),simulateTask('part:B task:2',1000),simulateTask('part:B task:3',1000)])    
    a.forEach(x=>console.log(x))
}

partb()
