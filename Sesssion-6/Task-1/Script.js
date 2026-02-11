const p=document.getElementById('secret-message')
const btn=document.getElementById('btn')

btn.addEventListener('click',()=>{
    p.textContent='You found the secret message!'
})
