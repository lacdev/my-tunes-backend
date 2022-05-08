import { Router } from 'express'
import { verifyAdmin, verifyToken } from '../middlewares/auth'
import {
  handleGetUser,
  handleGetUsers,
  handleUserDelete,
  handleUserUpdate,
  // handleUserCreate,
} from '../controllers/user'

const router = Router()

// User auth protected user private routes
router.get('/me', verifyToken, handleGetUser)
router.get('/me/cart', verifyToken, handleGetUser)
router.get('/me/orders', verifyToken, handleGetUser)
router.get('/me/songs', verifyToken, handleGetUser)
router.get('/me/playlists', verifyToken, handleGetUser)

// Admin protected private users routes
router.get('/', verifyToken, verifyAdmin, handleGetUsers)
router.get('/:userId', verifyToken, verifyAdmin, handleGetUser)
router.patch('/:userId', verifyToken, verifyAdmin, handleUserUpdate)
router.delete('/:userId', verifyToken, verifyAdmin, handleUserDelete)
// router.post('/', handleUserCreate)

export { router as userRouter }
