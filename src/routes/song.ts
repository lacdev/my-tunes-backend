import { Router } from 'express'

const router = Router()

router.get('/')
router.get('/:songId')
router.post('/')
router.patch('/:songId')
router.delete('/:songId')

export { router as songRouter }
