const crop=require("../models/cropSchema")
require("../config")
const createPosts=async(req,res)=>{
    try{
        let data=new crop(req.body)
        data=await data.save()
        return res.status(200).send("Data Saved succesfully")
    }
    catch {
      res.status(400).send({ err: "Something went wrong" });
    }
}
const getPosts=async(req,res)=>{
    try{
        let data=await crop.find(req.body)
        console.log(data)
       return data = res.status(200).send({
                  ResponseCode: 0,
                  Opt: null,
                  Static_Opt: null,
                  Data: data,
                  Data1: [{ Coloumn1: 1 }],
                });
             
               
      } catch {
        res.status(400).send({ err: "Something went wrong" });
      }
}
module.exports={createPosts,getPosts}