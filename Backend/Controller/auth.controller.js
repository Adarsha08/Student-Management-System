const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.registerAdmin =async (req, res) => {
try{
        const {name,email,password}=req.body;
        //admin xa ki xaina herne 
        const existing =await pool.query("SELECT * FROM admins WHERE email=$1",[email]);

        if(existing.rows.length>0)//it means when row.length>0 then email already exists where length=0 means email not exists
        {
            return res.status(400).json({message:"Admin already exists"});
        }
        const hashPassword=await bcrypt.hash(password,10);//10 is salt rounds
        const newAdmin=await pool.query("INSERT INTO admins (name,email,password) VALUES($1,$2,$3) RETURNING id,name,email",[name,email,hashPassword]);//inserting new admin

        res.status(201).json({message:"Admin registered successfully",admin:newAdmin.rows[0]});
        console.log(newAdmin.rows[0]);
  }
  catch(err)
    {
        console.error(err.message);
         console.error("Register error:", err); 
        res.status(500).send("Server error");

    }
};


exports.loginAdmin =async (req, res) => {
  try{
    const {email,password}=req.body;
    //check if admin exists
    const admin =await pool.query("SELECT * FROM admins WHERE email=$1",[email]);
    if(admin.rows.length===0)
    {
        return res.status(400).json({message:"Invalid Credentials"});
    }
    //check password
    const validPassword=await bcrypt.compare(password,admin.rows[0].password);
    if(!validPassword)
    {
        return res.status(400).json({message:"Invalid Credentials"});
    }
    //generate jwt token and put the admin id in payload so that we can identify the admin in protected routes and use the id wherever the req is sent from the frontend 
    const token =jwt.sign({adminId:admin.rows[0].id},process.env.JWT_Secret,{expiresIn:'1h'});
    res.json({message:"Login successful",token});//token lai client side ma store garne 
   
  }
  catch(err)
  {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
