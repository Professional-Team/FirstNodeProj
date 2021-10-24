require('dotenv').config()

const mongoose = require("mongoose")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require('cors')

const AuthRouter = require("./routes/auth")
const SubmissionRouter = require("./routes/submissions")
const InterviewRequestRouter = require("./routes/interviewRequest")

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

const port = process.env.PORT || 3000;


app.use("/api", AuthRouter)
app.use("/api", SubmissionRouter)
app.use("/api", InterviewRequestRouter)

mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then(() => {
    console.log('DB is connected');
})
app.listen(port, () => {
    console.log(`server listening at ${port}`)
})