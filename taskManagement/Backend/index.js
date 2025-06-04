
import dotenv from 'dotenv';
dotenv.config({});
import connectDB from "./utils/db.js";
import app from "./src/app.js";
const url="https://task-management-theta-pied.vercel.app/"

app.listen(url || 5000,()=>{
    connectDB();
    console.log("server is running ");
})
