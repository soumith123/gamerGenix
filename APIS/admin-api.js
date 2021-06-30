const exp=require("express")

const adminApi=exp.Router()

const errorHandler=require("express-async-handler")

const jwt= require("jsonwebtoken")

// to secure sensitive data
require("dotenv").config()

const multerCloudinary=require("./middlewares/multerCloudinary")

adminApi.use(exp.json())


adminApi.post("/login", errorHandler(async(req,res,next)=>
{
    let credentials=req.body;
    if(req.body.username!==process.env.ADMIN_USERNAME)
    {
        res.send({message:"Invalid username"})
    }
    else if (req.body.password!==process.env.ADMIN_PASSWORD)
    {
        res.send({message:"Invalid Password"})
    }
    else
    {
        let signedToken=jwt.sign({username:credentials.username},process.env.SECRET, {expiresIn:100000000})

        res.send({message:"login success", token: signedToken, username: credentials.username})
    }
}))





module.exports=adminApi