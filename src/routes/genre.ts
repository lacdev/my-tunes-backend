import { Router } from 'express'
import {
  handleGenreCreate,
  handleGenreDelete,
  handleGenreUpdate,
  handleGetGenre,
  handleGetGenres,
} from '../controllers/genre'

const router = Router()

router.get('/', handleGetGenres)
router.get('/:genreId', handleGetGenre)
router.post('/', handleGenreCreate)
router.patch('/:genreId', handleGenreUpdate)
router.delete('/:genreId', handleGenreDelete)

export { router as genreRouter }
