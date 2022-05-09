import { Router } from 'express'
import { verifyToken } from '../middlewares/auth'
import {
  handleGetPlaylist,
  handleGetPlaylists,
  handlePlaylistCreate,
  handlePlaylistDelete,
  handlePlaylistUpdate,
  handleAddSongToPlaylist,
  handleDeleteSongFromPlaylist,
} from '../controllers/playlist'

const router = Router()

router.get('/', handleGetPlaylists)
router.get('/:playlistId', handleGetPlaylist)
router.post('/', verifyToken, handlePlaylistCreate)
router.patch('/:playlistId/songs', handleAddSongToPlaylist)
router.delete('/:playlistId/songs/:songId', handleDeleteSongFromPlaylist)
router.patch('/:playlistId', verifyToken, handlePlaylistUpdate)
router.delete('/:playlistId', verifyToken, handlePlaylistDelete)

export { router as playlistRouter }
