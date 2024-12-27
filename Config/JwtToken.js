const jwt = require("jsonwebtoken");


const token = async (user)=>{
    return jwt.sign({id: user._id,email:user.email,role:user.role},
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRE
        }
    )
}

const adminToken = async(user)=>{
    return jwt.sign({ id:user._id, email: user.email, role:'admin'},
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRE
        }
    )
}

module.exports = {token,adminToken};