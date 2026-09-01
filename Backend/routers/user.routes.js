import express from 'express'
import { Router } from 'express'
import { loginController, registerUserController,logoutController  } from '../controllers/userController.js' 
import auth from '../middleware/auth.js'
const userRouter = express.Router()



userRouter.post("/register",registerUserController)
userRouter.post("/login",loginController)
userRouter.get('/logout',auth,logoutController)

export default userRouter