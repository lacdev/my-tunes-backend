import { Router } from 'express'
import { verifyAdmin, verifyToken } from '../middlewares/auth'
import {
  handleGetUser,
  handleGetUsers,
  handleUserDelete,
  handleUserUpdate,
  // handleUserCreate,
} from '../controllers/user'

const router = Router()

// User auth protected user private routes

/**
 * @openapi
 *
 *
 * /api/me:
 *  get:
 *    tags:
 *      - Get User Profile information
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/me', verifyToken, handleGetUser)

/**
 * @openapi
 *
 *
 * /api/me/cart:
 *  get:
 *    tags:
 *      - Get User Profile information
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/me/cart', verifyToken, handleGetUser)

/**
 * @openapi
 *
 *
 * /api/me/orders:
 *  get:
 *    tags:
 *      - Get User Profile information
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/me/orders', verifyToken, handleGetUser)

/**
 * @openapi
 *
 *
 * /api/me/songs:
 *  get:
 *    tags:
 *      - Get User Profile information
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/me/songs', verifyToken, handleGetUser)

/**
 * @openapi
 *
 *
 * /api/me/playlists:
 *  get:
 *    tags:
 *      - Get User Profile information
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/me/playlists', verifyToken, handleGetUser)

// Admin protected private users routes

/**
 * @openapi
 *
 *
 * /api/users:
 *  get:
 *    tags:
 *      - Get Users (Admin)
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/', verifyToken, verifyAdmin, handleGetUsers)

/**
 * @openapi
 *
 *
 * /api/users/{userId}:
 *  get:
 *    tags:
 *      - Get Users (Admin)
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.get('/:userId', verifyToken, verifyAdmin, handleGetUser)

/**
 * @openapi
 *
 *
 * /api/users/{userId}:
 *  patch:
 *    tags:
 *      - Get Users (Admin)
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.patch('/:userId', verifyToken, verifyAdmin, handleUserUpdate)

/**
 * @openapi
 *
 *
 * /api/users/{userId}:
 *  delete:
 *    tags:
 *      - Get Users (Admin)
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.delete('/:userId', verifyToken, verifyAdmin, handleUserDelete)
// router.post('/', handleUserCreate)

export { router as userRouter }
