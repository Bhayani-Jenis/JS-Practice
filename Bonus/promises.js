// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve('p1')
//     },1000)
// })
// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve('p2')
//     },2000)
// })
// let p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve('p3')
//     },3000)
// })
// Promise.all([p1,p2,p3]).then((x)=>console.log(x))
// Promise.race([p1,p2,p3]).then((x)=>console.log(x))





// let promises = [
//     new Promise((resolve) => setTimeout(() => resolve('p3'), 3000)),
//     new Promise((resolve) => setTimeout(() => resolve('p1'), 1000)),
//     new Promise((resolve) => setTimeout(() => resolve('p2'), 2000)),
// ];

// // Attach .then() to each promise dynamically
// promises.forEach(p => p.then(res => console.log(res)));





// function fetchdata(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve({id,name:'User'+id})},1000)
//     })
// }

// async function fetchall(){
//     let a=await fetchdata(1)
//     console.log(a);
//      let b=await fetchdata(2)
//     console.log(b); 
//     let c=await fetchdata(3)
//     console.log(c);
// }
// // fetchall()
// async function fetchUsersInParallel() {
//     const promises = [fetchdata(1), fetchdata(2), fetchdata(3)];
//     const users = await Promise.all(promises);
//     console.log(users);
// }

// fetchUsersInParallel();



