import {
  createSong,
  deleteSong,
  getAllSongs,
  getSongById,
  updateSong,
} from '../usecases/song'

export const handleGetSongs = async (req, res) => {
  const songs = await getAllSongs()
  res.send({ response: songs })
}

export const handleGetSong = async (req, res) => {
  const { songId } = req.params
  const song = await getSongById(songId)
  res.send({ response: song })
}

export const handleSongCreate = async (req, res) => {
  const body = req.body
  const song = await createSong(body)
  res.send({ status: 200, response: song })
}

export const handleSongUpdate = async (req, res) => {
  const { songId } = req.params
  const body = req.body
  const song = await updateSong(songId, body)
  res.send({ status: 200, response: song })
}

export const handleSongDelete = async (req, res) => {
  const { songId } = req.params
  const song = await deleteSong(songId)
  res.send({ status: 204, response: song })
}
