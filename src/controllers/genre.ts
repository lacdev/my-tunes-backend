import {
  createGenre,
  deleteGenre,
  getAllGenres,
  getGenreById,
  updateGenre,
} from '../usecases/genre'

export const handleGetGenres = async (req, res) => {
  try {
    const genres = await getAllGenres()
    res.send({ response: genres })
  } catch (e) {
    console.error(e)
  }
}

export const handleGetGenre = async (req, res) => {
  try {
    const { genreId } = req.params
    const genre = await getGenreById(genreId)
    res.send({ response: genre })
  } catch (e) {
    console.error(e)
  }
}

export const handleGenreCreate = async (req, res) => {
  try {
    const body = req.body
    const genre = await createGenre(body)
    res.send({ status: 200, response: genre })
  } catch (e) {
    console.error(e)
  }
}

export const handleGenreUpdate = async (req, res) => {
  try {
    const { genreId } = req.params
    const body = req.body
    const genre = await updateGenre(genreId, body)
    res.send({ status: 200, response: genre })
  } catch (e) {
    console.error(e)
  }
}

export const handleGenreDelete = async (req, res) => {
  try {
    const { genreId } = req.params
    const genre = await deleteGenre(genreId)
    res.send({ status: 204, response: genre })
  } catch (e) {
    console.error(e)
  }
}
