const express = require("express");
require("./config");
// const route = require("./route");
const router=require("./route")
const app = express();
app.use(express.json());
app.use('/',router)

app.listen(5000,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server started")
    }
    
});
