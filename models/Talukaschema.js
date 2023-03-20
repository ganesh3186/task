const mongoose = require("mongoose");
require("../config");
taluka = new mongoose.Schema({
  City_Id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'district'
  },

 Taluka_Id: String,
  Taluka_Name: String,
});
module.exports=mongoose.model("taluka",taluka)