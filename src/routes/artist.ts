import { Router } from 'express'

const router = Router()

router.get('/')
router.get('/:artistId')
router.post('/')
router.patch('/:artistId')
router.delete('/:artistId')

export { router as artistRouter }
