
const authMiddleware = require("../middleWare/authMiddleware")
const { route } = require("../controller/questionController");
const { getAllQuestions,getSingleQuestion,postQuestion } = require("../controller/questionController"); // Import controller
// API endpoints
route.post("/questions", authMiddleware, postQuestion);
 const route=require('express').Router()
 route.get("/:questionId", authMiddleware, getSingleQuestion);
 // Define the route for fetching all questions
 route.get("/question",authMiddleware,getAllQuestions);
 module.exports=route;


