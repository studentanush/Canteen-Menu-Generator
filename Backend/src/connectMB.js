import mongoose from "mongoose";
const connectMB = async()=>{
    await mongoose.connect("mongodb+srv://aj21122006:zv86kAuDXzOLTxLb@cluster0.8qdn5.mongodb.net/CanteenMenu");
    console.log("Database connected..");
}
export default connectMB
