const farmer = require("../models/farmerSchema");
require("../config");
const createPosts = async (req, res) => {
  try {
    let data = new farmer(req.body);
    data = await data.save();
    return res.status(200).send({
      ResponseCode: 0,
      ResponseMessage: "Success....!",
      ID: null,
      url1: null,
      url2: null,
      Data: [
        {
          responseCode: 0,
          ResponseMessage: "Success....",
        },
      ],
      Data1: [{ Coloumn1: 1 }],
    });
    
  }catch {
    res.status(400).send({ err: "Something went wrong" });
  }
};
const getPosts = async (req, res) => {
  try {
    let data = await farmer.find({ FARMER_NAME: req.body["FARMER_NAME"] });
   return data = res.status(200).send({
      ResponseCode: 0,
      ResponseMessage: req.body["GET_DATA"],
      Opt: null,
      Static_Opt: null,
      Data: data,
      Data1: [{ Coloumn1: 1 }],
    });
    
  } catch {
    res.status(400).send({ err: "Something went wrong" });
  }
};
module.exports = { createPosts, getPosts };
