const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: '*'
}))


const authRouter = require('./routes/authRouter.js')
const itemRouter = require('./routes/itemRouter.js')

const feedbackRouter = require('./routes/feedbackRouter.js')


app.use('/api/auth', authRouter);
app.use('/api/item', itemRouter);
app.use('/api/feedback', feedbackRouter);






mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {

    console.log('connection to mongodb');
    app.listen(process.env.PORT, (err) => {
        err ? console.log(err) : console.log('Server is listening');;
    })
})