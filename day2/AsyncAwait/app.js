async function kuchb(){
    console.log("promis chlne wla hw");
    
    await new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("wait aftr 2 sec");
            resolve();
        },2000)
    })
    console.log("promis cmplt");
    
}
console.log(kuchb());
