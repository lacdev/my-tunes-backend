import { AlbumModel } from '../models/album'

export const getAllGenres = async () => {
  return await AlbumModel.find()
}

export const getGenreById = async (id: any) => {
  return await AlbumModel.findById(id)
}

export const createGenre = async (body: any) => {
  return await AlbumModel.create(body)
}

export const updateGenre = async (id: any, body: any) => {
  return await AlbumModel.findByIdAndUpdate(id, body, { new: true })
}

export const deleteGenre = async (id: any) => {
  return await AlbumModel.findByIdAndDelete(id)
}
