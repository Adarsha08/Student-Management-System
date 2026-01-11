const jwt=require('jsonwebtoken');
require('dotenv').config();
module.exports= function(req,res,next)
{
    //get token from header
    const token =req.header('Authorization')?.split(' ')[1];//Bearer token format ma aauxa so split gareko
    if(!token)
    {
        return res.status(401).json({message:"No token, authorization denied"});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_Secret);
        req.adminId=decoded.adminId;
        next();
    }
    catch(err)
    {
        console.error("Auth middleware error:", err);
        res.status(401).json({message:"Token is not valid"});
    }
}