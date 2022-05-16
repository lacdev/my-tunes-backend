import { Router } from 'express'
import { verifyToken } from '../middlewares/auth'
import {
  handleGetPlaylist,
  handleGetPlaylists,
  handlePlaylistCreate,
  handlePlaylistDelete,
  handlePlaylistUpdate,
  handleAddSongToPlaylist,
  handleDeleteSongFromPlaylist,
} from '../controllers/playlist'

const router = Router()

/**
 * @openapi
 *
 *
 * /api/playlists:
 *  get:
 *    tags:
 *      - Get All Playlists
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/', handleGetPlaylists)

/**
 * @openapi
 *
 *
 * /api/playlists/{playlistId}:
 *  get:
 *    tags:
 *      - Get All Playlists
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/:playlistId', handleGetPlaylist)

/**
 * @openapi
 *
 *
 * /api/playlists/:
 *  post:
 *    tags:
 *      - Get All Playlists
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.post('/', verifyToken, handlePlaylistCreate)

/**
 * @openapi
 *
 *
 * /api/playlists/songs:
 *  patch:
 *    tags:
 *      - Get All Playlists
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.patch('/:playlistId/songs', handleAddSongToPlaylist)

/**
 * @openapi
 *
 *
 * /api/playlistId/songs/{songId}:
 *  delete:
 *    tags:
 *      - Get All Playlists
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.delete('/:playlistId/songs/:songId', handleDeleteSongFromPlaylist)

/**
 * @openapi
 *
 *
 * /api/playlists/{playlistId}:
 *  patch:
 *    tags:
 *      - Get All Playlists
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.patch('/:playlistId', verifyToken, handlePlaylistUpdate)

/**
 * @openapi
 *
 *
 * /api/playlists/{playlistId}:
 *  delete:
 *    tags:
 *      - Get All Playlists
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.delete('/:playlistId', verifyToken, handlePlaylistDelete)

export { router as playlistRouter }
