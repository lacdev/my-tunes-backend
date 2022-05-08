import { Request, Response } from 'express'
import {
  getAllPlaylists,
  getPlaylistById,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
} from '../usecases/playlist'

export const handleGetPlaylists = async (req: Request, res: Response) => {
  try {
    const playlists = await getAllPlaylists()
    res.send({ response: playlists })
  } catch (e) {
    console.error()
  }
}

export const handleGetPlaylist = async (req: Request, res: Response) => {
  try {
    const { playlistId } = req.params
    const playlist = await getPlaylistById(playlistId)
    res.send({ response: playlist })
  } catch (e) {
    console.error(e)
  }
}

export const handlePlaylistCreate = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const playlist = await createPlaylist(body)
    res.send({ status: 200, response: playlist })
  } catch (e) {
    console.error(e)
  }
}

export const handlePlaylistUpdate = async (req: Request, res: Response) => {
  try {
    const { playlistId } = req.params
    const body = req.body
    const playlist = await updatePlaylist(playlistId, body)
    res.send({ status: 200, response: playlist })
  } catch (e) {
    console.error(e)
  }
}

export const handlePlaylistDelete = async (req: Request, res: Response) => {
  try {
    const { playlistId } = req.params
    const playlist = await deletePlaylist(playlistId)
    res.send({ status: 204, response: playlist })
  } catch (e) {
    console.error(e)
  }
}