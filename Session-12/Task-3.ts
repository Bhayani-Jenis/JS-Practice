// Assignment 3
// Create overloads for a function format that:
// Accepts number → returns string
// Accepts Date → returns string

// -----------------------------1------------------------------
function format(num:number):string
function format(num:Date):string
function format(num:number|Date):string{
    if(typeof num==='number'){
        return num.toString()
    }
    else{
        return num.toString()
    }

}






