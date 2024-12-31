import StatusCode from "http-status-codes";
import jwt from "jsonwebtoken";

//when user send data they will use token to authenticate them
const authMiddleware = async (req, res, next) => {
  //take token from users (generated token)
  const authHeader = req.headers.authorization;
  //check if  token is not available
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(StatusCode.UNAUTHORIZED).json({
      success: false,
      message: "Not Authorized Login again",
    });
  }
  const token = authHeader.split(" ")[1];
  // console.log(authHeader);

  try {
    const { userName, userId } = jwt.verify(token, process.env.JWT_SECRET);
    //set user with userName & userId
    req.user = { userName, userId };
    // call callback function to pass the data up on authorization.
    next();
  } catch (error) {
    console.log(error);
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong, try again later!",
    });
  }
};

export default authMiddleware;
