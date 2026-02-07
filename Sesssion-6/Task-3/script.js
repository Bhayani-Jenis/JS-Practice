let count=0;
let btn=document.getElementById('btn')
btn.addEventListener('click',()=>{
     count++;
    btn.textContent=`Clicks:`+count
})


