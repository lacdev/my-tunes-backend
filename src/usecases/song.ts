import { SongModel } from '../models/song'

export const getAllSongs = async () => {
  return await SongModel.find()
}

export const getSongById = async (id: any) => {
  return await SongModel.findById(id)
}

export const createSong = async (body: any) => {
  return await SongModel.create(body)
}

export const updateSong = async (id: any, body: any) => {
  return await SongModel.findByIdAndUpdate(id, body, { new: true })
}

export const deleteSong = async (id: any) => {
  return await SongModel.findByIdAndDelete(id)
}
