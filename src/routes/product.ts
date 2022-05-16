import { Router } from 'express'
import { verifyAdmin, verifyToken } from '../middlewares/auth'
import {
  handleGetProducts,
  handleGetProductsByFormat,
  handleGetProductsByArtist,
  handleGetProduct,
  handleProductCreate,
  handleProductUpdate,
  handleProductDelete,
} from '../controllers/product'

const router = Router()

/**
 * @openapi
 *
 *
 * /api/products:
 *  get:
 *    tags:
 *      - Get All Products
 *    description: Response if user access products
 *    responses:
 *      200:
 *        description: products are up and running
 *
 */

router.get('/', handleGetProducts)

/**
 * @openapi
 *
 *
 * /api/products/{productId}:
 *  get:
 *    tags:
 *      - Get All Products
 *    description: Response if user access products
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */

router.get('/:productId', handleGetProduct)

/**
 * @openapi
 *
 *
 * /api/products/:
 *  post:
 *    tags:
 *      - Get All Products
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.post('/', verifyToken, verifyAdmin, handleProductCreate)

/**
 * @openapi
 *
 *
 * /api/products/{productId}:
 *  patch:
 *    tags:
 *      - Get All Products
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.patch('/:productId', verifyToken, verifyAdmin, handleProductUpdate)

/**
 * @openapi
 *
 *
 * /api/products/{productId}:
 *  delete:
 *    tags:
 *      - Get All Products
 *    description: Response if user access albums
 *    responses:
 *      200:
 *        description: Albums are up and running
 *
 */
router.delete('/:productId', verifyToken, verifyAdmin, handleProductDelete)

export { router as productRouter }
