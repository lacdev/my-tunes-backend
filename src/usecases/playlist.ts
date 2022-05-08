import { PlaylistModel } from '../models/playlist'

export const getAllPlaylists = async () => {
  return await PlaylistModel.find()
}

export const getPlaylistById = async (id: any) => {
  return await PlaylistModel.findById(id)
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
