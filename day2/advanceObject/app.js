let person ={
    name:"Arbaj",
    python:80,
    maths:75,
    physics:84,
    total: function(){
        return(this.python+ this.maths +this.physics)
    },
    details : function(){
        return(`my name is ${this.name} and my total marks is ${this.total()}`)
    }
}
console.log(person.total());
console.log(person.details());