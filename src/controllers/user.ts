import {
  createGenre,
  deleteGenre,
  getAllGenres,
  getGenreById,
  updateGenre,
} from '../usecases/genre'

export const handleGetGenres = async (req, res) => {
  const genres = await getAllGenres()

  res.send({ response: genres })
}

export const handleGetGenre = async (req, res) => {
  const { genreId } = req.params
  const genre = await getGenreById(genreId)
  res.send({ response: genre })
}

export const handleGenreCreate = async (req, res) => {
  const body = req.body
  const genre = await createGenre(body)
  res.send({ status: 200, response: genre })
}

export const handleGenreUpdate = async (req, res) => {
  const { genreId } = req.params
  const body = req.body
  const genre = await updateGenre(genreId, body)
  res.send({ status: 200, response: genre })
}

export const handleGenreDelete = async (req, res) => {
  const { genreId } = req.params
  const genre = await deleteGenre(genreId)
  res.send({ status: 204, response: genre })
}
