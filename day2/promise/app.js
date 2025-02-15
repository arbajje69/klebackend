
let promise = new Promise(function(resolve,reject){

    setTimeout(function(){
        let data= "hi I am promise";
        let err="srry me ghr jaa rha huu"
        // resolve(data);
        reject(err);

    },2000)
})

// promise.then(function(data){
//     console.log(data);
    
// }).catch(function(err){
//     console.log(err);
    
// })