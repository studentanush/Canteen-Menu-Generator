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
const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
export  {
    userModel,
    adminModel
}
