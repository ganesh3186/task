const Mobile=require("../models/mobileOtpSchema")
require("../config")
const createPosts=async(req,res)=>{
    try {
        let data = new Mobile(req.body);
        data = await data.save();
        console.log(data);
        return res.status(200).send("Data saved succesfully");
      }catch {
        res.status(400).send({ err: "Something went wrong" });
      }
}
const getPosts=async(req,res)=>{
    try{
     
      let data=await Mobile.find(req.body)
      console.log(data)
     return data = res.status(200).send({
                ResponseCode: 0,
                ResponseMessage:  "",
                Opt: null,
                Static_Opt: null,
                Data: data,
                Data1: [{ DATA1: 0 }],
                User_Roll:null
              });
              
    } catch {
      res.status(400).send({ err: "Something went wrong" });
    }
    
  }
  module.exports = { createPosts, getPosts };