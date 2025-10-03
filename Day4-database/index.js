const express=require("express")
const {UserModel,TodoModel}=require("./DB")
const { default: mongoose } = require("mongoose")
const app=express()
mongoose.connect("mongodb+srv://nareshjet598_db_user:IYKN2EuVZ7KVmWnd@cluster0.txndxdh.mongodb.net/todo-app-database")

app.post("/signup",(req,res)=>{

})


app.post("/login",(req,res)=>{

})


app.post("/todo",(req,res)=>{

})


app.post("/todos",(req,res)=>{

})

app.listen(3000)