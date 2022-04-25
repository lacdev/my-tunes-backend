import { Router } from 'express'
import {
  handleGetUser,
  handleGetUsers,
  handleUserCreate,
  handleUserDelete,
  handleUserUpdate,
} from '../controllers/user'
import { verifyToken } from '../middlewares/auth'

const router = Router()

router.get('/', verifyToken, handleGetUsers)
router.get('/:userId', handleGetUser)
router.post('/', handleUserCreate)
router.patch('/:userId', handleUserUpdate)
router.delete('/:userId', handleUserDelete)

export { router as userRouter }
