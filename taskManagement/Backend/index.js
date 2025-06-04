
import dotenv from 'dotenv';
dotenv.config({});
import connectDB from "./utils/db.js";
import app from "./src/app.js";


app.listen(5000,()=>{
    connectDB();
    console.log("server is running ");
})