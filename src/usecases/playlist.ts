import { PlaylistModel } from '../models/playlist'

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

export const deletePlaylist = async (id: any) => {
  return await PlaylistModel.findByIdAndDelete(id)
}
