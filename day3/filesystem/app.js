let fs =require('fs');
// console.log(fs);

3
// CRUD => Create Read Update Delete 

let data ="I am learning file system ";

// create 
// fs.writeFile("ABC,txt",data,{
//     encoding:'utf-8'
// },(err)=>{
//     if(err){
//         throw err
//     }
//     console.log(" data created successfully");
    
// })


// second way  
fs.writeFileSync('abc.txt',data,(err)=>{
if(err){
    throw err
}
console.log(" data created successfully")

})

// read file system 
let data1 = fs.readFileSync('abc.txt')
console.log(data1.toString());


// update 
fs.appendFileSync('abc.txt','it is easy ');
// delete
fs.unlinkSync('abc.txt');


// let obj="arbajjj "
// fs.writeFileSync('arbaj.txt',obj,(err)=>{
//     if(err){
//         throw err
//     }
//     console.log(" data created successfully")
    
//     })
// let obj1 = fs.readFileSync('arbaj.txt')
// console.log(obj1.toString());

// fs.appendFileSync('arbaj.txt','This is my updated valueeee');
// fs.appendFileSync('arbaj.txt','nn');

let obj2 ={
    nam:"abj",
    age:20
}
let newData =JSON.stringify(obj2);

fs.writeFileSync('arbaj.txt',newData,(err)=>{
    if(err){
        throw err
    }
    console.log(" data created successfully")
    
    })