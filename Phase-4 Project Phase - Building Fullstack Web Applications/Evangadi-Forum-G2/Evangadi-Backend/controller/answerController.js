const dbConnection = require("../db/dbconfig");
const { statusCodes, StatusCodes } = require("http-status-codes");
async function postAnswer(req, res) {
  // res.send("answer")
  const { questionid, answer } = req.body;
  // no need to check question id becouse it will be avaliable with the question so we
  // will check only answer
  if (!answer) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please provide answer" });
  }
  try {
    await dbConnection.query(
      "INSERT INTO ANSWERS(questionid,answer,userid) VALUES(?,?,?)",
      [questionid, answer, req.user.userid]
    );

    return res
      .status(StatusCodes.CREATED)
      .json({ msg: "Answer posted successfully" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "An unexpected error occurred." });
  }
}
//Solomon
const getAnswer = async (req, res) => {
  const questionId = req.params.questionId;
  try {
    const [answers] = await dbConnection.query(
      `SELECT 
        q.questionId, q.answer, q.answerId, q.userId, q.created_at, u.userName, u.firstName, u.lastName FROM answers AS q JOIN users AS u ON q.userId = u.userId WHERE q.questionId = ?`,
      [questionId]
    );
    if (!answers || answers.length === 0) {
      return res.status(StatusCode.NOT_FOUND).json({
        success: false,
        message: "No answers found for this question.",
      });
    }
    return res.status(StatusCode.OK).json(answers);
  } catch (error) {
    console.error(error.message);
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong, try again later!",
    });
  }
};

module.exports = { postAnswer, getAnswer };
