import { Request, Response } from 'express'

import {
  createArtist,
  deleteArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
} from '../usecases/artist'

export const handleGetArtists = async (req: Request, res: Response) => {
  try {
    const artists = await getAllArtists()

    if (artists) {
      res.send({ response: artists })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleGetArtist = async (req: Request, res: Response) => {
  try {
    const { artistId } = req.params
    const artist = await getArtistById(artistId)
    if (artist) {
      res.send({ response: artist })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleArtistCreate = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const artist = await createArtist(body)

    if (artist) {
      res.send({ status: 200, response: artist })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleArtistUpdate = async (req: Request, res: Response) => {
  try {
    const { artistId } = req.params
    const body = req.body
    const artist = await updateArtist(artistId, body)
    if (artist) {
      res.send({ status: 200, response: artist })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleArtistDelete = async (req: Request, res: Response) => {
  try {
    const { artistId } = req.params
    const artist = await deleteArtist(artistId)

    if (artist) {
      res.send({ status: 204, response: artist })
    }
  } catch (e) {
    console.error(e)
  }
}
