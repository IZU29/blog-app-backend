require('dotenv').config()
const cors = require('cors');

const express = require('express')
const app = express()
const postroute = require('./routes/post')
const userRoute = require('./routes/user')
const infoRoute = require('./routes/info')
const commentRoute = require('./routes/comment')
const connectDB = require('./db/connect')
const errorHandler = require('./Error/ErrorHandler')

app.use(express.json())
app.use(cors());

app.use('/api' , postroute)
app.use('/user' , userRoute)
app.use('/protect' , infoRoute)
app.use('/comments' , commentRoute)

app.use(errorHandler)
app.listen(5000 , () => {
    connectDB(process.env.MONGO_URI)
    console.log('Server Is Listening on port 5000')
})