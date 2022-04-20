import { ArtistModel } from '../models/artist'

export const getAllGenres = async () => {
  return await ArtistModel.find()
}

export const getGenreById = async (id: any) => {
  return await ArtistModel.findById(id)
}

export const createGenre = async (body: any) => {
  return await ArtistModel.create(body)
}

export const updateGenre = async (id: any, body: any) => {
  return await ArtistModel.findByIdAndUpdate(id, body, { new: true })
}

export const deleteGenre = async (id: any) => {
  return await ArtistModel.findByIdAndDelete(id)
}
