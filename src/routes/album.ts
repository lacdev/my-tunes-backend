import { Router } from 'express'
import {
  handleAlbumCreate,
  handleAlbumUpdate,
  handleGetAlbum,
  handleGetAlbums,
} from '../controllers/album'

const router = Router()

router.get('/', handleGetAlbums)
router.get('/:albumId', handleGetAlbum)
router.post('/', handleAlbumCreate)
router.patch('/:albumId', handleAlbumUpdate)
router.delete('/:albumId', handleAlbumUpdate)

export { router as albumRouter }
