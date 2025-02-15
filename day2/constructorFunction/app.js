// // constructor function 

// function Person(){
//     this.name ="arbaj";
//     this.age=19;
//     this.email="arbaj@gmail";
// }

// let user =new person();
// console.log(user);


// custom constructor function 

function Person(naam,age,email){
    this.name = naam;
    this.age= age;
    this.email= email;
    this.description=function(){
        return(`my name is ${this.name} my age is ${this.age} and email is ${this.email}`)
    }
}

let user = new Person("arbaj",19,"abj@gmail.com");
let user1 = new Person("abc",25,"abcc@gmail.com");
// console.log(user);
// console.log(user1);
console.log(user.description());
console.log(user1.description());