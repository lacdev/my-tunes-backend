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

/**
 * @openapi
 *
 *
 * /api/genres:
 *  get:
 *    tags:
 *      - Get all Genres
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/', handleGetGenres)

/**
 * @openapi
 *
 *
 * /api/genres/{genreId}:
 *  get:
 *    tags:
 *      - Get all Genres
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/:genreId', handleGetGenre)

/**
 * @openapi
 *
 *
 * /api/genres/{genreId}/songs:
 *  get:
 *    tags:
 *      - Get all Genres
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/:genreId/songs', handleGetSongsByGenre)

/**
 * @openapi
 *
 *
 * /api/genres/{genreId}/albums:
 *  get:
 *    tags:
 *      - Get all Genres
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/:genreId/albums', handleGetAlbumsByGenre)

/**
 * @openapi
 *
 *
 * /api/genres/{genreId}/playlists:
 *  get:
 *    tags:
 *      - Get all Genres
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/:genreId/playlists', handleGetPlaylistsByGenre)

/**
 * @openapi
 *
 *
 * /api/genres:
 *  post:
 *    tags:
 *      - Get all Genres
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.post('/', verifyToken, verifyAdmin, handleGenreCreate)

/**
 * @openapi
 *
 *
 * /api/genres/{genreId}:
 *  patch:
 *    tags:
 *      - Get all Genres
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.patch('/:genreId', verifyToken, verifyAdmin, handleGenreUpdate)

/**
 * @openapi
 *
 *
 * /api/genres/{genreId}:
 *  delete:
 *    tags:
 *      - Get all Genres
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.delete('/:genreId', verifyToken, verifyAdmin, handleGenreDelete)

export { router as genreRouter }
