// Problem Statement:
// You are designing a library management system. Each Library object contains a list of Book objects.

// Implement a feature to duplicate a library.

// When duplicating, sometimes you want changes in the duplicated library to reflect in the original (shallow copy), and sometimes you want the two libraries to be completely independent (deep copy).

// Write a function to demonstrate both behaviors and show how modifying a book in one library affects the other in each case.

// Core Concept Tested:

// Understanding how shallow copies copy references and deep copies copy objects recursively.


class book {
    constructor(name,author) {
        this.name=name
        this.author=author
    }
}

class library {
    constructor(name,books=[]) {
        this.name=name
        this.books=books
    }
    shallowcopy(){
        return new library(this.name,this.books)
    }
    deepcopy(){
        let copy=[];
        copy=this.books.map((x)=>new book(x.name,x.author));
        return new library('tit',copy);
    }
    show(){
        console.log(this.books);       
    }

}

let lib=new library('1',[new book('1','me'),new book('2','you')])
let shallowlib=lib.shallowcopy()
let deeplib=lib.deepcopy()
lib.show()
shallowlib.books[1].author='jd';
lib.show()
deeplib.books[1].author='jd';
lib.show()



