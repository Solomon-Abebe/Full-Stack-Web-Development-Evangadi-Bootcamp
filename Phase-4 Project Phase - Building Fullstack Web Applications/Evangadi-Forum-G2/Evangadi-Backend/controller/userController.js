
// db Connection
const dbConnection = require("../db/dbConfig");
const bcrypt = require('bcrypt');
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')
async function register(req, res) {
  const { userName, firstName, lastName, email, password } = req.body;
  if (!email || !password || !firstName || !lastName || !userName) {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "please provide all required fields!" });
  }
try {
  const [user] = await dbConnection.query("select userName,userid from users where userName =? or email =? ", [userName,email])
  if (user.length > 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "user already existed" });
  }
if(password.length<=8){
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "password must be at least 8 characters" });
  }
// encrypt the password
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password,salt)

await dbConnection.query("INSERT INTO users (userName, firsName, lastName,email,password) VALUES (?,?,?,?,?) ",[userName,firstName,lastName,email,hashedPassword])
return res.status(StatusCodes.CREATED).json({ msg: "user register" });
} catch (error) {
    console.log(error.message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "something went wrong, try again later!" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please enter all required fields!" });
  }
  try {
    const [user] = await dbConnection.query(
      "select username,userid,password from users where email=?",
      [email]
    );
    if (user.length == 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "invalid credential!" });
    }
    //compare password
    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "invalid credential" });
    }
    const username = user[0].username;
    const userid = user[0].userid;
    const token = jwt.sign({ username, userid }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(StatusCodes.OK)
      .json({ msg: "user login successfull", token, username });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "something went wrong, try again later!" });
  }
}
async function checkUser(req, res) {
  const username = req.user.username;
  const userid = req.user.userid;
  // console.log(userid);
  res.status(StatusCodes.OK).json({ msg: "valid user", username, userid });
}

module.exports = { register, login, checkUser };
