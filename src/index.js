import dotenv from 'dotenv'

// import mongoose from "mongoose"
// import { DB_NAME } from "./constants";

import connectDB from "./db/index.js"
dotenv.config({ path: './env' })

connectDB();



// import express from "express"

// const app = express()

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on("error", (err)=>{
//             console.error("Error", err);
//             throw err;
//         })
// app.lissen(process.env.PORT, ()=>{
//     console.log('server is running on port', process.env.PORT);
    
// })
//     } catch (error) {
//         console.error("Error", error);
//         throw err
        
//     }
// })()

