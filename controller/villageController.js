require("../config");
const village = require("../models/villageSchema");

const createPosts = async (req, res) => {
  try {
    let data = new village({
      Taluka_Id: req.body.Taluka_Id,
      Village_Name: req.body.Village_Name,
    });
    data = await data.save();
    console.log(data);
    return res.status(200).send("Data saved succesfully");
  } catch(err) {
    res.status(400).send(err);
  }
};
const getPosts = async (req, res) => {
  try {
    if ({ Taluka_Id: req.body["ID1"] }) {
      let data = await village.find({ Taluka_Id: req.body["ID1"] });
     return data = res.status(200).send({
        ResponseCode: 0,
        ResponseMessage: req.body["GET_DATA"],
        Opt: null,
        Static_Opt: null,
        Data: data,
        Data1: [{ Coloumn1: 1 }],
      });

     
    }
  } catch {
    res.status(400).send({ err: "Something went wrong" });
  }
};
module.exports = { createPosts, getPosts };
