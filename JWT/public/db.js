const { Schema, default: mongoose } = require("mongoose");

var UserSchema= new Schema({
	email:String,
	password:String
})

var userModel=mongoose.model("User",UserSchema)
module.exports={
	userModel
}