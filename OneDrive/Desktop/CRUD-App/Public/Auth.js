require('dotenv').config();
const jwt = require("jsonwebtoken");
const { User } = require("../Db");

async function AuthMiddleware(req,res,next){
 	const Token = req.headers.token || req.headers.authorization;
	const decoded=jwt.verify(Token,process.env.JWT_SECRET)
	const ExistingUser = await User.findOne({ Email: decoded.Email });
	if (!ExistingUser) {
			return res.status(400).json({ msg: "Email does not exists! Use a different email." })
	}else{
		req.user = ExistingUser;
		next()
	}

}	

module.exports={
	AuthMiddleware
}
