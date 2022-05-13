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

/**
 * @openapi
 *
 *
 * /api/artists:
 *  get:
 *    tags:
 *      - Get All Artists
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/', handleGetArtists)

/**
 * @openapi
 *
 *
 * /api/artists/{artistId}:
 *  get:
 *    tags:
 *      - Get All Artists
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/:artistId', handleGetArtist)

/**
 * @openapi
 *
 *
 * /api/artists/{artistId}/albums:
 *  get:
 *    tags:
 *      - Get All Artists
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/:artistId/albums', handleGetAlbumsByArtist)

/**
 * @openapi
 *
 *
 * /api/artists/{artistId}/songs:
 *  get:
 *    tags:
 *      - Get All Artists
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/:artistId/songs', handleGetSongsByArtist)

/**
 * @openapi
 *
 *
 * /api/artists:
 *  post:
 *    tags:
 *      - Get All Artists
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.post('/', verifyToken, verifyAdmin, handleArtistCreate)

/**
 * @openapi
 *
 *
 * /api/artists/{artistId}:
 *  patch:
 *    tags:
 *      - Get All Artists
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.patch('/:artistId', verifyToken, verifyAdmin, handleArtistUpdate)

/**
 * @openapi
 *
 *
 * /api/artists/{artistId}:
 *  delete:
 *    tags:
 *      - Get All Artists
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.delete('/:artistId', verifyToken, verifyAdmin, handleArtistDelete)

export { router as artistRouter }
