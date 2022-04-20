import { Router } from 'express'
import {
  createGenre,
  deleteGenre,
  getAllGenres,
  getGenreById,
  updateGenre,
} from '../controllers/genre'

const router = Router()

router.get('/', async (req, res) => {
  const genres = await getAllGenres()

  res.send({ response: genres })
})

export { router as genreRouter }

router.get('/')

router.get('/:genreId', async (req, res) => {
  const { genreId } = req.params
  const genre = await getGenreById(genreId)
  res.send({ response: genre })
})

router.post('/', async (req, res) => {
  const body = req.body
  const genre = await createGenre(body)
  res.send({ status: 200, response: genre })
})

router.patch('/:genreId', async (req, res) => {
  const { genreId } = req.params
  const body = req.body
  const genre = await updateGenre(genreId, body)
  res.send({ status: 200, response: genre })
})

router.delete('/:genreId', async (req, res) => {
  const { genreId } = req.params
  const genre = await deleteGenre(genreId)
  res.send({ status: 204, response: genre })
})
