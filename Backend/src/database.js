import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})
const adminSchema = new Schema({
    name:{type:String,required:true}
    
})
const feedbackSchema = new Schema({
    feedback:{type:String},
    name:{type:String,required:true},
    date:{type:String}
})
const MenuDataSchema = new Schema({
    menu:{type:Array}
})
const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const feedbackModel = mongoose.model("feedback",feedbackSchema);
const MenuDataModel = mongoose.model("menuData",MenuDataSchema);
export  {
    userModel,
    adminModel,
    feedbackModel,
    MenuDataModel
}
