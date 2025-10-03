const mongoose=require("mongoose")

const schema=mongoose.schema;
const ObjectId=mongoose.ObjectId;

const User=new schema({
	email:String,
	name:String,
	password:String
})

const Todo= new schema({
	title:String,
	done:Boolean,
	userId:ObjectId,
})

const UserModel=mongoose.model('users',User)
const TodoModel=mongoose.model('Todos',Todo)

module.exports={
	UserModel:UserModel,
	TodoModel:TodoModel
}