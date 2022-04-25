import { Router } from 'express'
import {
  handleGenreCreate,
  handleGenreDelete,
  handleGenreUpdate,
  handleGetGenre,
  handleGetGenres,
} from '../controllers/genre'
import { verifyAdmin, verifyToken } from '../middlewares/auth'

const router = Router()

router.get('/', handleGetGenres)
router.get('/:genreId', handleGetGenre)
router.post('/', verifyToken, verifyAdmin, handleGenreCreate)
router.patch('/:genreId', verifyToken, verifyAdmin, handleGenreUpdate)
router.delete('/:genreId', verifyToken, verifyAdmin, handleGenreDelete)

export { router as genreRouter }
