import express from "express"
import {registerUser, loginUser} from '../controllers/userControllers.js'
const router = express.Router()


router.post('/',registerUser)
router.post('/login',loginUser)

export {
   router
}