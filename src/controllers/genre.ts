import { Request, Response } from 'express'

import {
  createGenre,
  deleteGenre,
  getAllGenres,
  getGenreById,
  updateGenre,
} from '../usecases/genre'

export const handleGetGenres = async (req: Request, res: Response) => {
  try {
    const genres = await getAllGenres()

    if (genres) {
      res.send({ data: genres })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleGetGenre = async (req: Request, res: Response) => {
  try {
    const { genreId } = req.params

    const genre = await getGenreById(genreId)

    if (genre) {
      res.send({ response: genre })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleGenreCreate = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const genre = await createGenre(body)

    if (genre) {
      res.send({ status: 200, response: genre })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleGenreUpdate = async (req: Request, res: Response) => {
  try {
    const { genreId } = req.params
    const body = req.body
    const genre = await updateGenre(genreId, body)

    if (genre) {
      res.send({ status: 200, response: genre })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleGenreDelete = async (req: Request, res: Response) => {
  try {
    const { genreId } = req.params
    const genre = await deleteGenre(genreId)

    if (genre) {
      res.send({ status: 204, response: genre })
    }
  } catch (e) {
    console.error(e)
  }
}
