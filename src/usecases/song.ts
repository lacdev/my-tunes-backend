import { SongModel } from '../models/song'

export const getAllGenres = async () => {
  return await SongModel.find()
}

export const getGenreById = async (id: any) => {
  return await SongModel.findById(id)
}

export const createGenre = async (body: any) => {
  return await SongModel.create(body)
}

export const updateGenre = async (id: any, body: any) => {
  return await SongModel.findByIdAndUpdate(id, body, { new: true })
}

export const deleteGenre = async (id: any) => {
  return await SongModel.findByIdAndDelete(id)
}
