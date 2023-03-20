require("../config");
const taluka= require("../models/Talukaschema");

const createPosts=async (req,res)=>{
    try {
        let data = new taluka({ City_Id:req.body.City_Id,
          Taluka_Id:req.body.Taluka_Id,
          Taluka_Name:req.body.Taluka_Name});
        data = await data.save();
        console.log(data);
        return res.status(200).send("Data saved succesfully");
      }  catch {
        res.status(400).send({ err: "Something went wrong" });
      }
}
const getPosts=async(req,res)=>{
  try{
    if({City_Id:req.body['ID1']}){
    let data=await taluka.find({City_Id:req.body['ID1']})
    return data = res.status(200).send({
      ResponseCode: 0,
      ResponseMessage:  req.body["GET_DATA"],
      Opt: null,
      Static_Opt: null,
      Data: data,
      Data1: [{ Coloumn1: 1 }],
    });
   
   }
  } catch {
    res.status(400).send({ err: "Something went wrong" });
  }
  
}
module.exports={createPosts,getPosts}
