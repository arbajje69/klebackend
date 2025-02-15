const express = require('express');
const app = express();


// app.get('/',(req,res)=>{
//     res.send("<h1>I am get request <h1>")
// })

// app.get('/cat',(req,res)=>{
//     res.send("<h1>I am geting request from cat<h1>")
// })

// app.get('/hello',(req,res)=>{
//     res.send("<h1>I am geting request from hello<h1>")
// })

// path parameter
// app.get('/r/:anything',(req,res)=>{
//     console.log(req.params);
//     let{anything}= req.params;
//     res.send(`<h1>I am ${anything}<h1>`)
// })

//request parameters 
app.get('/search',(req,res)=>{
    console.log(req.query);
    let{name}=req.query;
    res.send(`<h1>My name is ${name}<h1>`);
    
})

const PORT =8080;
app.listen(PORT,()=>{
    console.log(`server is connected ${PORT}`);
    
})
