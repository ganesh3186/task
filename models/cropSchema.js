const mongoose=require("mongoose")
require("../config")
const crop=new mongoose.Schema({

    CROP_ID: String,
    CROP_NAME:String ,
    CROP_IMAGE:String
})
module.exports=mongoose.model("crop",crop)