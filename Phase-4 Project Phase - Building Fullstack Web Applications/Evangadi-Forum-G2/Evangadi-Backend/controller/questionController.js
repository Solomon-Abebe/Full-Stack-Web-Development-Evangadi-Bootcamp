//! Endpoint Implementation:
// Load the Express framework to handle HTTP requests and responses.
const express = require("express");
// Initialize App
const app = express();
const dbConnection=require('../db/dbconfig');

async function postQuestion(req, res) {
    const { title, description } = req.body;
  
    // Check for missing items
    if (!title || !description) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: "Please provide all required fields!",
      });
  }

try {
  // get userid from user
  const { userId } = req.user;

  // get a unique identifier for questionid so two questions do not end up having the same id. crypto built in node module.
  const questionId = crypto.randomBytes(16).toString("hex");

  const tag = generateTag(title);

  // Insert question into database
  await dbConnection.query(
    "INSERT INTO questions ( userId, questionId, title, description, tag, created_at) VALUES (?,?,?,?,?,?)",
    [userId, questionId, title, description, tag, new Date()]
  );

  return res.status(StatusCodes.CREATED).json({
    meg: "Question created successfully",
  });
  
} catch (error) {
  console.log(error.message);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: "An unexpected error occurred.",
    });
  }
}


async function getSingleQuestion(req, res) {
  const { questionId } = req.params;
  console.log(questionId);
  if (!questionId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Invalid question ID" });
  }
  try {
    // Query the database to get the question details
    const [question] = await dbConnection.execute(
      "SELECT * FROM questions WHERE questionId = ?",
      [questionId])
    
    //  If no question found, return 404
    if (question.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "Question not found" });
    }
    // Return the question details
    return res.status(StatusCodes.OK).json({ question: question[0] });
  } catch (error) {
    console.error(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "An unexpected error occurred" });
  }
}


 async function getAllQuestions(req, res) {
   try {
     // Query the database to fetch all questions
     const [questions] = await db.query("SELECT * FROM questions"); // Fetch data from 'questions' table

     // Send the response JSON payload
     res.status(200).json({
       success: true,
       count: questions.length, // Number of questions
       data: questions, // Array of questions
     });
   } catch (error) {
     // Handle server errors
     res.status(500).json({
       success: false,
       message: "Internal Server Error",
     });
   }
 };

module.exports ={getSingleQuestion,postQuestion,getAllQuestions}
