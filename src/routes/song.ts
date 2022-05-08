import { Router } from 'express'
import {
  handleGetSong,
  handleGetSongs,
  handleSongCreate,
  handleSongDelete,
  handleSongUpdate,
} from '../controllers/song'
import { verifyAdmin, verifyToken } from '../middlewares/auth'

const router = Router()

router.get('/', handleGetSongs)
router.get('/:songId', handleGetSong)
router.post('/', verifyToken, verifyAdmin, handleSongCreate)
router.patch('/:songId', verifyToken, verifyAdmin, handleSongUpdate)
router.delete(
  '/:songId',
  verifyToken,
  verifyToken,
  verifyAdmin,
  handleSongDelete
)

export { router as songRouter }
