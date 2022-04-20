import { Router } from 'express'
import {
  handleGetUser,
  handleGetUsers,
  handleUserCreate,
  handleUserDelete,
  handleUserUpdate,
} from '../controllers/user'

const router = Router()

router.get('/', handleGetUsers)
router.get('/:userId', handleGetUser)
router.post('/', handleUserCreate)
router.patch('/:userId', handleUserUpdate)
router.delete('/:userId', handleUserDelete)

export { router as userRouter }
