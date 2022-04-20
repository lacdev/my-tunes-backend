import { Router } from 'express'

const router = Router()

router.get('/')
router.get('/:userId')
router.post('/')
router.patch('/:userId')
router.delete('/:userId')

export { router as userRouter }
