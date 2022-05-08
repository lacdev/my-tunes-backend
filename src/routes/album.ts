import { Router } from 'express'
import { verifyAdmin, verifyToken } from '../middlewares/auth'
import {
  handleAlbumCreate,
  handleAlbumUpdate,
  handleGetAlbum,
  handleGetAlbums,
} from '../controllers/album'
import {
  handleGetSongsByAlbum,
  handleGetSongByAlbumAndSongId,
} from '../controllers/song'

const router = Router()

router.get('/', handleGetAlbums)
router.get('/:albumId', handleGetAlbum)
router.get('/:albumId/songs', handleGetSongsByAlbum)
router.get('/:albumId/songs/:songId', handleGetSongByAlbumAndSongId)
router.post('/', verifyToken, verifyAdmin, handleAlbumCreate)
router.patch('/:albumId', verifyToken, verifyAdmin, handleAlbumUpdate)
router.delete('/:albumId', verifyToken, verifyAdmin, handleAlbumUpdate)

export { router as albumRouter }
