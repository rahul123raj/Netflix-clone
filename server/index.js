const express = require('express')
const dotenv = require('dotenv')
const databaseConnect = require('./utils/database')
const cookieParser = require('cookie-parser')
const router = require('./router/router')
const cors = require('cors')


const app = express()


dotenv.config()

databaseConnect()

const corsOptions = {
    origin: "https://netflix-clone-front-ehb5.onrender.com",
    credentials: true
}

app.use(cors(corsOptions))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

app.use('/api',router)

const port = process.env.PORT

app.listen(port,(err)=>{
    console.log(`server is running on port ${port}`)
    if(err) throw err
})
