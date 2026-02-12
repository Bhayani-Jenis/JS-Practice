class UserService {
  public name: string;
  private secret: string;
  protected token: string;

  constructor(name: string) {
    this.name = name;
    this.secret = "hidden";
    this.token = "abc";
  }
}

let a=new UserService("jd")
console.log(a.name);

// console.log(a.secret);
// console.log(a.token);
//here we only access public variables but don't access private or protected members outside class
//protected variable used in same class or in class which entends these class
//private variables are only used in those class we dont use them in any other class or outside class
//public variable has several privacy issues which is solved by the protected and private variables