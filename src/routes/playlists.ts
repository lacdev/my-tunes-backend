import { Router } from 'express'
import {
  handleGetPlaylist,
  handleGetPlaylists,
  handlePlaylistCreate,
  handlePlaylistDelete,
  handlePlaylistUpdate,
} from '../controllers/playlist'
import { verifyToken } from '../middlewares/auth'

const router = Router()

router.get('/', handleGetPlaylists)
router.get('/:playlistId', handleGetPlaylist)
router.post('/', verifyToken, handlePlaylistCreate)
router.patch('/:playlistId', verifyToken, handlePlaylistUpdate)
router.delete('/:playlistId', verifyToken, handlePlaylistDelete)

export { router as playlistRouter }
