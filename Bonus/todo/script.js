let container=document.getElementsByClassName('container')
let text=document.getElementById('task-input')
let btn=document.getElementById('add-btn')
let list=document.getElementById('task-list')

let task=[]
btn.addEventListener('click',()=>{
    if(text.value){
    task.push(text.value)
    savetasks(text.value)}
    text.value=''
    showing(task)
})

function showing(arr){   
    list.innerText='' 
    arr.map((x)=>{
        let li=document.createElement('li')
        li.innerText=x
        list.appendChild(li);
    })
}

function savetasks(x){
    let tasks=JSON.parse(localStorage.getItem('tasks'))||[]
    tasks.push(x);
    localStorage.setItem('tasks',JSON.stringify(tasks))
}

function loadtasks(){
    let tasks=JSON.parse(localStorage.getItem('tasks'))||[]
    showing(tasks)
}
window.onload=loadtasks










// let copy=[]
// array.forEach(element => {
//     let ob={}
//     for (const key in object) {
//         ob[key]=object[key]
//     }
//     copy.push(ob);
// });


