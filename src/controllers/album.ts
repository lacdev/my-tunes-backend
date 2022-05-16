import { Request, Response } from 'express'
import {
  createAlbum,
  deleteAlbum,
  getAlbumById,
  getAllAlbums,
  updateAlbum,
  getAllAlbumsByGenreId,
  getAllAlbumsByArtistId,
} from '../usecases/album'

export const handleGetAlbums = async (req: Request, res: Response) => {
  try {
    const albums = await getAllAlbums()

    if (albums) {
      res.send({ response: albums })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleGetAlbumsByGenre = async (req: Request, res: Response) => {
  try {
    const { genreId } = req.params

    const albums = await getAllAlbumsByGenreId(genreId)

    if (albums) {
      res.send({ response: albums })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleGetAlbumsByArtist = async (req: Request, res: Response) => {
  try {
    const { artistId } = req.params
    const albums = await getAllAlbumsByArtistId(artistId)

    if (albums) {
      res.send({ response: albums })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleGetAlbum = async (req: Request, res: Response) => {
  try {
    const { albumId } = req.params
    const album = await getAlbumById(albumId)

    if (album) {
      res.send({ response: album })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleAlbumCreate = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const album = await createAlbum(body)

    if (album) {
      res.send({ status: 200, response: album })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleAlbumUpdate = async (req: Request, res: Response) => {
  try {
    const { albumId } = req.params
    const body = req.body
    const album = await updateAlbum(albumId, body)

    if (album) {
      res.send({ status: 200, response: album })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleAlbumDelete = async (req: Request, res: Response) => {
  try {
    const { albumId } = req.params
    const album = await deleteAlbum(albumId)

    if (album) {
      res.send({ status: 204, response: album })
    }
  } catch (e) {
    console.error(e)
  }
}
