import { Router } from 'express'
import { verifyAdmin, verifyToken } from '../middlewares/auth'
import { handleGetPlaylistsByGenre } from '../controllers/playlist'
import { handleGetAlbumsByGenre } from '../controllers/album'
import { handleGetSongsByGenre } from '../controllers/song'
import {
  handleGenreCreate,
  handleGenreDelete,
  handleGenreUpdate,
  handleGetGenre,
  handleGetGenres,
} from '../controllers/genre'

const router = Router()

router.get('/', handleGetGenres)
router.get('/:genreId', handleGetGenre)
router.get('/:genreId/songs', handleGetSongsByGenre)
router.get('/:genreId/albums', handleGetAlbumsByGenre)
router.get('/:genreId/playlists', handleGetPlaylistsByGenre)
router.post('/', verifyToken, verifyAdmin, handleGenreCreate)
router.patch('/:genreId', verifyToken, verifyAdmin, handleGenreUpdate)
router.delete('/:genreId', verifyToken, verifyAdmin, handleGenreDelete)

export { router as genreRouter }
