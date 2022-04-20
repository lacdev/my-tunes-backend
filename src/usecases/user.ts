import { UserModel } from '../models/user'

export const getAllGenres = async () => {
  return await UserModel.find()
}

export const getGenreById = async (id: any) => {
  return await UserModel.findById(id)
}

export const createGenre = async (body: any) => {
  return await UserModel.create(body)
}

export const updateGenre = async (id: any, body: any) => {
  return await UserModel.findByIdAndUpdate(id, body, { new: true })
}

export const deleteGenre = async (id: any) => {
  return await UserModel.findByIdAndDelete(id)
}
