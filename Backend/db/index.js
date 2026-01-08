const {Pool}=require('pg');
require('dotenv').config();

const pool=new Pool(
    {
        host:process.env.DB_host,
        user:process.env.DB_user,
        password:process.env.DB_Password,
        database:process.env.DB_Name,
        port:process.env.DB_Port
    }
)
pool.connect()
.then(()=>{
    console.log("Database connected successfully")})
    .catch((err)=>
    {
        console.error("Database connection error",err);
    });

module.exports=pool;

