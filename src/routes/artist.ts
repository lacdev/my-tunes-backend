import { Router } from 'express'
import { verifyAdmin, verifyToken } from '../middlewares/auth'
import { handleGetSongsByArtist } from '../controllers/song'
import { handleGetAlbumsByArtist } from '../controllers/album'
import {
  handleArtistCreate,
  handleArtistDelete,
  handleArtistUpdate,
  handleGetArtist,
  handleGetArtists,
} from '../controllers/artist'

const router = Router()

router.get('/', handleGetArtists)
router.get('/:artistId', handleGetArtist)
router.get('/:artistId/albums', handleGetAlbumsByArtist)
router.get('/:artistId/songs', handleGetSongsByArtist)
router.post('/', verifyToken, verifyAdmin, handleArtistCreate)
router.patch('/:artistId', verifyToken, verifyAdmin, handleArtistUpdate)
router.delete('/:artistId', verifyToken, verifyAdmin, handleArtistDelete)

export { router as artistRouter }
