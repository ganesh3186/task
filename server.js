const express=require("express")
require("./config")
const router=require("./route")
let app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/",router)

app.listen(5000,(err)=>{
    if(err){
        console.warn(err)
    }else{
        console.warn("server started")
    }
})