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
const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const feedbackModel = mongoose.model("feedback",feedbackSchema);
export  {
    userModel,
    adminModel,
    feedbackModel
}
