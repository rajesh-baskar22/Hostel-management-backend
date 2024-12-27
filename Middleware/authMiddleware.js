const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");
require("dotenv").config();

const  authMiddleware =async (req,res,next) =>{
    try{
        if(
            !req.headers.authorization ||
            !req.headers.authorization.startsWith("Bearer")
        ){
            return res.status(401).json({
                message:"Unauthorized"
            });
        }

        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);
        if(!user){
            return res.status(401).json({
                message:"User  Not Found"
            });
        }
        req.user = user;
        next();


    }catch(error){
        return res.status(403).json({
            message:"Invalid or expired token"
        });
    }
};

module.exports = authMiddleware;