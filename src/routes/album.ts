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

/**
 * @openapi
 *
 *
 * /api/albums:
 *  get:
 *    tags:
 *      - Get All Albums
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */

router.get('/', handleGetAlbums)

/**
 * @openapi
 *
 *
 * /api/albums/{albumId}:
 *  get:
 *    tags:
 *      - Get All Albums
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */

router.get('/:albumId', handleGetAlbum)

/**
 * @openapi
 *
 *
 * /api/albums/{albumId}/songs:
 *  get:
 *    tags:
 *      - Get All Albums
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/:albumId/songs', handleGetSongsByAlbum)

/**
 * @openapi
 *
 *
 * /api/albums/{albumId}/songs/{songId}:
 *  get:
 *    tags:
 *      - Get All Albums
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/:albumId/songs/:songId', handleGetSongByAlbumAndSongId)

/**
 * @openapi
 *
 *
 * /api/albums:
 *  post:
 *    tags:
 *      - Get All Albums
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.post('/', verifyToken, verifyAdmin, handleAlbumCreate)

/**
 * @openapi
 *
 *
 * /api/albums/{albumId}:
 *  patch:
 *    tags:
 *      - Get All Albums
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.patch('/:albumId', verifyToken, verifyAdmin, handleAlbumUpdate)

/**
 * @openapi
 *
 *
 * /api/albums/{albumId}:
 *  delete:
 *    tags:
 *      - Get All Albums
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.delete('/:albumId', verifyToken, verifyAdmin, handleAlbumUpdate)

export { router as albumRouter }
