import { Router } from 'express'
import {
  handleArtistCreate,
  handleArtistDelete,
  handleArtistUpdate,
  handleGetArtist,
  handleGetArtists,
} from '../controllers/artist'
import { verifyAdmin, verifyToken } from '../middlewares/auth'

const router = Router()

router.get('/', handleGetArtists)
router.get('/:artistId', handleGetArtist)
router.post('/', verifyToken, verifyAdmin, handleArtistCreate)
router.patch('/:artistId', verifyToken, verifyAdmin, handleArtistUpdate)
router.delete('/:artistId', verifyToken, verifyAdmin, handleArtistDelete)

export { router as artistRouter }
