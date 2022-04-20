import { Router } from 'express'
import { getUserById } from '../controllers/user'

const router = Router()

router.get('/')

export { router as userRouter }

router.get('/', async (req, res) => {
  const user = await getUserById(req.body._id)
  res.send({ response: user })
})
