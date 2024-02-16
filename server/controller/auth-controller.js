const User = require("../model/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const home = async (req, res) => {
  try {
    res.status(200).send("Hello World");
    console.log("Hello World");
  } catch (error) {
    console.log(error);
  }
};
const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { firstname, lastname, department, year, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const saltRound = 10;
    const  hashPassword = await bcrypt.hash(password,saltRound);
    const UserCreated = await User.create({ firstname, lastname, department, year, email, password:hashPassword });
    res.status(200).json({msg: UserCreated, token: await UserCreated.generateToken(), userId: UserCreated._id.toString()});
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};
const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const  user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({msg:"Invalid Credentials"});
    }
    const isValidPass = await bcrypt.compare(password, user.password);
    if(isValidPass){
      res.status(200).json({msg: "Login Successful", token: await user.generateToken(), userId: user._id.toString()});
    }
    else{
      res.status(401).json({msg:"Invalid Email or Password"});
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

const getUserData = async(req, res)=>{
  try {
    const token = req.header("Authorization");
    if(!token){
      return res.status(401).send({auth:false, message:'No Token Provided'})
    }
    const jwtoken = token.replace("Bearer","").trim();
   
    let decoded= jwt.verify(jwtoken, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({email:decoded.email}).select({
      password:0,
    });    
    return res.status(200).json({userData});
  } catch (error) {
    console.log();
  }
}

module.exports = { home, register, login,getUserData };
