// Assignment 4
// Create abstract class Service<T> with abstract method execute() .
// Extend it with UserService .
type User={
    id:number,
    name:string
}

abstract class Service<T>{
    abstract execute():T
}

class UserService extends Service<User>{
    execute() {
        return{
            id:1,
            name:"jenis"
        }
    }
}








