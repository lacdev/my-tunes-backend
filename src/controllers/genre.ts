import { GenreModel } from '../models/genre'

export const getAllGenres = async () => {
  return await GenreModel.find()
}

export const getGenreById = async (id: any) => {
  return await GenreModel.findById(id)
}

export const createGenre = async (body: any) => {
  return await GenreModel.create(body)
}

export const updateGenre = async (id: any, body: any) => {
  return await GenreModel.findByIdAndUpdate(id, body, { new: true })
}

export const deleteGenre = async (id: any) => {
  return await GenreModel.findByIdAndDelete(id)
}
