import { Router } from 'express'
import { verifyAdmin, verifyToken } from '../middlewares/auth'
import {
  handleGetSong,
  handleGetSongs,
  handleSongCreate,
  handleSongDelete,
  handleSongUpdate,
} from '../controllers/song'

const router = Router()

/**
 * @openapi
 *
 *
 * /api/songs:
 *  get:
 *    tags:
 *      - Get All Songs
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */

router.get('/', handleGetSongs)

/**
 * @openapi
 *
 *
 * /api/songs/{songId}:
 *  get:
 *    tags:
 *      - Get All Songs
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/:songId', handleGetSong)

/**
 * @openapi
 *
 *
 * /api/songs:
 *  post:
 *    tags:
 *      - Get All Songs
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.post('/', verifyToken, verifyAdmin, handleSongCreate)

/**
 * @openapi
 *
 *
 * /api/songs/{songId}:
 *  patch:
 *    tags:
 *      - Get All Songs
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.patch('/:songId', verifyToken, verifyAdmin, handleSongUpdate)

/**
 * @openapi
 *
 *
 * /api/songs/{songId}:
 *  delete:
 *    tags:
 *      - Get All Songs
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.delete('/:songId', verifyToken, verifyAdmin, handleSongDelete)

export { router as songRouter }
