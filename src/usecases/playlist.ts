import { PlaylistModel } from '../models/playlist'
import { SongModel } from '../models/song'
import { Types } from 'mongoose'

export const getAllPlaylists = async () => {
  return await PlaylistModel.find().populate({
    path: 'songs genres',
  })
}

export const getAllPlaylistsByGenreId = async (id: any) => {
  return await PlaylistModel.find({ genre: id }).populate({
    path: 'songs genres',
  })
}

export const getPlaylistById = async (id: any) => {
  return await PlaylistModel.findById(id).populate({
    path: 'songs genres',
  })
}

export const createPlaylist = async (body: any) => {
  return await PlaylistModel.create(body)
}

export const updatePlaylist = async (id: any, body: any) => {
  return await PlaylistModel.findByIdAndUpdate(id, body, { new: true })
}

export const addSongToPlaylist = async (id: any, body: any) => {
  return await PlaylistModel.findByIdAndUpdate(
    id,
    { $push: { songs: body } },
    { new: true }
  )
}

export const deleteSongFromPlaylist = async (playlistId: any, songId: any) => {
  console.log('song id in delete handler', songId)
  console.log('playlist id in delete handler', playlistId)

  return await PlaylistModel.findByIdAndUpdate(
    playlistId,
    { $pull: { songs: new Types.ObjectId(songId).toString() } },
    { new: true }
  )
}

export const deletePlaylist = async (id: any) => {
  return await PlaylistModel.findByIdAndDelete(id)
}
