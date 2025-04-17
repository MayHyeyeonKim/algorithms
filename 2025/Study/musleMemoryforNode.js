const express = require("express");
const app = express();
app.use(express.json());

let users = []; //assume this is database

//signup
app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  users.push({ email, password });
  res.status(201).json({ message: "User registered" });
});
//login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email && user.password === password);
  if (!user) return res.status(401).json({ errer: "Invalid credentials" });
  res.status(201).json({ message: "Login successful", token: "jwt" });
});
app.listen(3000, () => console.log("Server running"));

// 200 OK	요청 성공	일반적인 성공 응답 (예: 로그인 성공)
// 201 Created	리소스 생성됨	새로운 데이터 생성 시 사용 (예: 회원가입)
// 400 Bad Request	요청 자체가 잘못됨 (형식, 필드 등)	필수 값 누락, 잘못된 JSON 등
// 401 Unauthorized	인증 실패	비밀번호 틀림, 토큰 없음 등

// models/User.js - Mongoose schema

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

const User = mongoose.model("User", userSchema);
export default User;

//controllers/authController.js - business logic

import User from ".../models/User.js";
export const signup = async (req,res) => {
    const {email, password} = req.body;
    try {
        const existing = await User.findOne({email})
        if(existing) return res.status(400).json({message: "Email already exists"})
        const newUser = new User({email, password})
        await newUser.save()
        res.status(201).json({message:"Sucessfully User registered"})
    } catch (error) {
        res.status(500).json({error:"Singup failed"})
    }
};
export const login = async (res, req) => {
    const {email,password} = req.body;
    try {
        const user = await User.findOnd({email,password})
        if(!user) return res.status(401).json({error: "Invalid credentials"})
        res.status(200).json({message:"Login successful", token: "jwt"})
    } catch (error) {
        res.status(500).json({error:"Login failed"})
    }
};

//authRoutes.js

import express from "express";
import { signup, login } from "../controllers/authController.js";

const router = express.Router;

router.post("/signup", signup);
router.post("/login", login);

export default router;

// update app.js

import expres from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"

dotenv.config()

const app = express()
app.use(express.json())
app.use("/api/auth", authRoutes)

// /api/...: 데이터를 주고받는 API 요청
// /: 일반 프론트엔드 라우트 (예: React, Vue 앱)

const PORT = ProcessingInstruction.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server running on port", PORT)
    })
}).catch((err)=>console.error("DB connection error", err))

// .env
MONGO_URI = mongodb://localhost:27017/auth-db
PORT = 3000
