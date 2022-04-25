import { Router } from 'express'
import {
  handleGetUser,
  handleGetUsers,
  // handleUserCreate,
  handleUserDelete,
  handleUserUpdate,
} from '../controllers/user'
import { verifyAdmin, verifyToken } from '../middlewares/auth'

const router = Router()

// User auth protected user routes
router.get('/me', verifyToken, handleGetUser)
router.get('/me/playlists', verifyToken, handleGetUser)
router.get('/me/orders', verifyToken, handleGetUser)

// Admin protected users routes
router.get('/', verifyToken, verifyAdmin, handleGetUsers)
router.get('/:userId', verifyToken, verifyAdmin, handleGetUser)
router.patch('/:userId', verifyToken, verifyAdmin, handleUserUpdate)
router.delete('/:userId', verifyToken, verifyAdmin, handleUserDelete)
// router.post('/', handleUserCreate)

export { router as userRouter }
