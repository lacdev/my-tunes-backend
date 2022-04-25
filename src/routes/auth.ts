import { Router } from 'express'
import { registerUser, loginUser } from '../controllers/auth'

const router = Router()

router.post('/register', registerUser)

router.post('/login', loginUser)

export { router as authRouter }
