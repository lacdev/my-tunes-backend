import { Request, Response } from 'express'
import {
  getAllPlaylists,
  getPlaylistById,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
  getAllPlaylistsByGenreId,
  addSongToPlaylist,
  deleteSongFromPlaylist,
} from '../usecases/playlist'

export const handleGetPlaylists = async (req: Request, res: Response) => {
  try {
    const playlists = await getAllPlaylists()
    res.send({ response: playlists })
  } catch (e) {
    console.error()
  }
}

export const handleGetPlaylistsByGenre = async (
  req: Request,
  res: Response
) => {
  try {
    const { genreId } = req.params

    const playlists = await getAllPlaylistsByGenreId(genreId)
    res.send({ response: playlists })
  } catch (e) {
    console.error()
  }
}

export const handleGetPlaylist = async (req: Request, res: Response) => {
  try {
    const { playlistId } = req.params
    const playlist = await getPlaylistById(playlistId)

    if (playlist) {
      res.send({ response: playlist })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handlePlaylistCreate = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const playlist = await createPlaylist(body)

    if (playlist) {
      res.send({ status: 200, response: playlist })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleAddSongToPlaylist = async (req: Request, res: Response) => {
  try {
    const { playlistId } = req.params
    const body = req.body
    const playlist = await addSongToPlaylist(playlistId, body.songs)

    if (playlist) {
      res.send({ status: 200, response: playlist })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleDeleteSongFromPlaylist = async (
  req: Request,
  res: Response
) => {
  try {
    const { playlistId, songId } = req.params

    const playlist = await deleteSongFromPlaylist(playlistId, songId)

    if (playlist) {
      res.send({ status: 200, response: playlist })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handlePlaylistUpdate = async (req: Request, res: Response) => {
  try {
    const { playlistId } = req.params
    const body = req.body

    const playlist = await updatePlaylist(playlistId, body)

    if (playlist) {
      res.send({ status: 200, response: playlist })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handlePlaylistDelete = async (req: Request, res: Response) => {
  try {
    const { playlistId } = req.params
    const playlist = await deletePlaylist(playlistId)

    if (playlist) {
      res.send({ status: 204, response: playlist })
    }
  } catch (e) {
    console.error(e)
  }
}
