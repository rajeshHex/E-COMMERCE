const express= require("express");

const app= express();


app.use("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(4000,()=>{
    console.log("Port is running at 4000")
})