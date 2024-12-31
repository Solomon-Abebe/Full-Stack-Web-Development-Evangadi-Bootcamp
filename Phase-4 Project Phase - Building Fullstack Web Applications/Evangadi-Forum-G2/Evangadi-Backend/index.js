
const express= require ('express');
const app= express();
const dbConnection=require('./db/dbconfig')

const answerRoutes=require('./route/answerRoute')

app.use("api/answer",answerRoutes)

