const express = require('express')
const app = express();

// middleware
// app.use((req,res)=>{
//     // console.log(req);
//     res.send("<h1>Hii I am responding from server</h1>")
//     // console.log(res);
     
// });

// for perticular path 
app.use('/hello',(req,res)=>{
    // console.log(req);
    res.send("<h1>Hii I am responding from server</h1>")
    // console.log(res);
     
});

app.listen(8080,()=>{
    console.log('server is connected to port 8080');
    
})