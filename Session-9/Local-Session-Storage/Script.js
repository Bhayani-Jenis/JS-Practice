let input = document.getElementById('input')
let savebtn = document.getElementById('save-btn')
let loadbtn = document.getElementById('load-btn')
let show = document.getElementById('para')
let show1 = document.getElementById('para1')


console.log(input, savebtn, loadbtn, show);

savebtn.addEventListener('click', () => {
    localStorage.setItem("data", input.value)
    sessionStorage.setItem("data", input.value)
})


loadbtn.addEventListener('click', () => {
    let data = localStorage.getItem('data');
        let data2 = sessionStorage.getItem('data');

    show.innerText = data;
    show1.innerText=data2
})


