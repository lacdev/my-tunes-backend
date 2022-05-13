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

router.get('/:albumId', handleGetAlbum)

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
router.get('/:albumId/songs', handleGetSongsByAlbum)

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
router.get('/:albumId/songs/:songId', handleGetSongByAlbumAndSongId)

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
router.post('/', verifyToken, verifyAdmin, handleAlbumCreate)

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
router.patch('/:albumId', verifyToken, verifyAdmin, handleAlbumUpdate)

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
router.delete('/:albumId', verifyToken, verifyAdmin, handleAlbumUpdate)

export { router as albumRouter }
