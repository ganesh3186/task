require("../config");
const  State= require("../models/stateSchema");

const createPosts=async (req,res)=>{
  console.log(req.body)
    try {
        let data = new State(req.body);
        data = await data.save();
        console.log(data);
        return res.status(200).send("Data saved succesfully");
      }catch {
        res.status(400).send({ err: "Something went wrong" });
      }
}
const getPosts=async(req,res)=>{
  try{
    
    const data=await State.find()
    console.log(data)
   return data = res.status(200).send({
              ResponseCode: 0,
              ResponseMessage:  req.body["GET_DATA"],
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



