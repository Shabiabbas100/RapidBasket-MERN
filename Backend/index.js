import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import connectDB from "./config/connectDB.js"
import router from './routers/user.routes.js'
import uploadRouter from './routers/upload.route.js'
connectDB()

const PORT = 8080 || process.env.PORT 
const app = express()
app.use(cors({
    credentials : true,
    origin : process.env.FRONTEND_URL
}))
app.use(express.json())  //these are global middlewares, runs on every request, we can also use it on specific routes
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy : false
}))

app.get("/",(request,response)=>{
    ///server to client
    response.json({
        message : "Server is running ❤️ " + PORT
})})


app.listen(PORT,()=>{
    console.log("Server is running😒",PORT)
})
app.use('/api/user',router)
app.use("/api/file",uploadRouter)