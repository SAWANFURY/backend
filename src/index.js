import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_NAME } from "./db/constant/constant.js";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
})

connectDB();
.then(()=>{
    app.listen(process.env.PORT || 8000)
})