let arr =[1,2,3,4];
// let arr1 =[5,6,7,8];

// use spread Operator
let arr1 =[...arr,5,6,7,8];
// console.log(arr1);


// Spread Operators are used to merge arrays or objects
// Object 
let obj ={
    name:'arbaj',
    age:19,
    favcolor:"white"

}
let obj1 ={
    ...obj,
    favFood:"Pizza"
}
console.log(obj1);
