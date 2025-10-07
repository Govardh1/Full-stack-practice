const express = require("express");
const mongoose = require("mongoose");
const jwt=require("jsonwebtoken")
const JWT_SECRET="ASDFGHJKL"
const { userModel } = require("./public/db");
const app= express();
mongoose.connect("mongodb+srv://nareshjet598_db_user:IYKN2EuVZ7KVmWnd@cluster0.txndxdh.mongodb.net/").
then(()=>{
	"connection successfull"
})
app.use(express.json())
app.post("/signup",async (req,res)=>{
	const email=req.body.email;
	const password=req.body.password;
	 await userModel.create({
		email:email,
		password:password
	 })
	 res.json({
		msg:"you are signedup"
	 })
})
app.post("/signin",async(req,res)=>{
	const email=req.body.email;
	const password=req.body.password;
	const existingUser=await userModel.findOne({email})
	if (existingUser.password!==password) {
		res.json({ msg: "Invalid password" })
	}
	if (!existingUser) {
		res.json({
			msg:"you are not signedup"
		})
	}else{
		const token=jwt.sign({email},JWT_SECRET)
		res.json({
			msg:"congrajulations u are signed in",
			token
		})
	}
})
app.get("/users",async(req,res)=>{
	const token=req.headers.token;
	const decoded=jwt.verify(token,JWT_SECRET)

	if (!decoded) {
      return res.status(401).json({ msg: "Invalid token. Please sign in again." });
    }else{
		const users=await userModel.find({})
		 res.json({
      msg: "Token verified successfully",
      data: users
    });
	}

})
app.delete("/delete",async(req,res)=>{
 	const token=req.headers.token;
	const id=req.body.id;
	const decoded=jwt.verify(token,JWT_SECRET)
	if (!decoded) {
		res.json({
			msg:"Invalid token. Please sign in again."
		})
	}else{
		const deleteduser=await userModel.findByIdAndDelete(id)
		res.json({
			msg:"user deleted with id"+id,
			deleteduser
		})
	}
})

app.listen(3000)