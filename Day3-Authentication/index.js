const express= require("express")
const jwt=require("jsonwebtoken")
const app=express();
app.use(express.json())
const JWT_SECRET="USER_APP"
const users=[];
// function generateToken(){
// 	let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// 	let token="";
// 	for(let i=0;i<40;i++){
// 		token+=options[Math.floor(Math.random()*options.length)]
// 	}
// 	return token;
// }
app.post("/signup",(req,res)=>{
	const username = req.body.username;
	const password = req.body.password;

	users.push({
		username:username,
		password:password
	})
	res.json({
		message: "You have signed up"
	})
})

app.post("/signin",(req,res)=>{
	const username = req.body.username;
	const password = req.body.password;

	const user=users.find(user=>user.username===username && user.password===password);

	if(user){
		const token=jwt.sign({username:user.username},JWT_SECRET)
		
		res.json({
			token:token
		})
	}else{
		res.status(403).send({
            message: "Invalid username or password"
        })
	}
})

app.get("/me",(req,res)=>{
	const token=req.headers.token;
	const userDetails = jwt.verify(token, JWT_SECRET);
	const username=userDetails.username;
	const user=users.find(user=>user.username===username)
	console.log(user);
	console.log(userDetails);
	
	console.log(users);
	
	
	if(user){
		res.json({
			username:user.username,
		})
	}else{
		res.json({
			msg:"user is not existed"
		})
	}
})
app.listen(3000,()=>{
	 console.log(`Server is listening at port 3000`);
})