import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import connectMB from "./src/connectMB.js";
import { adminModel, feedbackModel, userModel } from "./src/database.js";
const JWT_SECRET = "i Love *****";
const app = express();
app.use(express.json());
connectMB();
app.use(cors());
const PORT = process.env.PORT || 4000;
app.post("/api/userlogin", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await userModel.findOne({
            email: email,

        });
        console.log(user);
        if (user) {
            const Name = user.name;
            console.log(Name);
            const passwordMatch = await bcrypt.compare(password, user.password);
            console.log(passwordMatch);
            if (passwordMatch) {
                const token = jwt.sign({
                    id: user._id.toString(),
                }, JWT_SECRET);
                res.json({
                    Name:Name,
                    token: token,
                    user:true
                })
            } else {
                res.json({
                    message: "Invalid credentials",
                    user:false
                })
            }
        } else {
            res.json({
                
                msg: "user not found"
            })
        }

    } catch (error) {
        console.log(error)
    }



})
app.post("/api/usersignup", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const alreadyexist = await userModel.findOne({
        email: email
    })
    console.log(alreadyexist);
    if (alreadyexist != null) {
        res.json({
            alreadyexist:true
        })
        console.log("user already exist")
    } else {
        console.log(name);
        const hashpassword = await bcrypt.hash(password, 5);


        try {
            await userModel.create({
                name: name,
                email: email,
                password: hashpassword

            })
        } catch (error) {
            console.log("error occured..")
            msg: error
        }
        res.json({
            alreadyexist:false,
            msg: "sign up successfull"
        })
    }


})
app.post("/api/adminlogin", async (req, res) => {
    try {
        const name = req.body.name;
        await adminModel.create({
            name: name
        })
    } catch (error) {
        console.log(error);
    }

    res.json({
        msg: "successfully login"
    })

})
app.post("/api/feedback",async(req,res)=>{
    const Feedback = req.body.Feedback;
    const Name = req.body.Name;
    const date = req.body.date;
    console.log(Feedback);
    try {
        await feedbackModel.create({
            feedback:Feedback,
            name:Name,
            date:date
        })
        res.json({
            success:true,
        })
    } catch (error) {
        res.json({
            success:false,
        })
    }
    
})
app.get("/api/feedback",async(req,res)=>{
    const response = await feedbackModel.find({});
    console.log(response);
    res.json({
        response,
    })


})

app.listen(PORT, () => console.log(`server started on ${PORT}`));