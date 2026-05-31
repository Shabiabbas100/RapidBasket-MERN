import express from 'express'
import { Router } from 'express'
import { loginController, registerUserController,logoutController  } from '../controllers/userController.js' 
import auth from '../middleware/auth.js'
const router = express.Router()



router.post("/register",registerUserController)
router.post("/login",loginController)
router.get('/logout',auth,logoutController)

export default router