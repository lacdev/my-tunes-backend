import { Router } from 'express'
import {
  handleAlbumCreate,
  handleAlbumUpdate,
  handleGetAlbum,
  handleGetAlbums,
} from '../controllers/album'
import { verifyAdmin, verifyToken } from '../middlewares/auth'

const router = Router()

router.get('/', handleGetAlbums)
router.get('/:albumId', handleGetAlbum)
router.post('/', verifyToken, verifyAdmin, handleAlbumCreate)
router.patch('/:albumId', verifyToken, verifyAdmin, handleAlbumUpdate)
router.delete('/:albumId', verifyToken, verifyAdmin, handleAlbumUpdate)

export { router as albumRouter }
