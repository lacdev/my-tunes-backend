import { Router } from 'express'
import { verifyAdmin, verifyToken } from '../middlewares/auth'
import {
  handleGetSong,
  handleGetSongs,
  handleSongCreate,
  handleSongDelete,
  handleSongUpdate,
} from '../controllers/song'

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
