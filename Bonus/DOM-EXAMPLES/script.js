// <------------------------------------counter---------------------------------------------------->
let inc = document.getElementById('inc')
let dec = document.getElementById('dec')
let p = document.getElementById('para')

let c = 0;

inc.addEventListener("click", () => {
    c++;
    p.textContent = c;
    p.style.fontSize = c + 16 + 'px'
    if (c >= 0) {
        p.style.color = 'green'
    }
});

dec.addEventListener("click", () => {
    c--;
    p.textContent = c;
    p.style.fontSize = c + 16 + 'px'
    if (c < 0) {
        p.style.color = 'red'
    }
});

// <------------------------------------password showing---------------------------------------------------->
let pass = document.getElementById("pass")
let show = document.getElementById("show")

show.addEventListener('click', () => {
    pass.type = 'text'
    setTimeout(() => {
    pass.type = 'password'
    }, 2000)
})





