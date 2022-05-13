import { Router } from 'express'
import { registerUser, loginUser } from '../controllers/auth'

const router = Router()

/**
 * @openapi
 *
 *
 * /api/register:
 *  post:
 *    tags:
 *      - Register a new user account
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */

router.post('/register', registerUser)

/**
 * @openapi
 *
 *
 * /api/login:
 *  post:
 *    tags:
 *      - Login with an existing account
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.post('/login', loginUser)

export { router as authRouter }
