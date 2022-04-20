import { Router } from 'express'
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
router.post('/', handleSongCreate)
router.patch('/:songId', handleSongUpdate)
router.delete('/:songId', handleSongDelete)

export { router as songRouter }
