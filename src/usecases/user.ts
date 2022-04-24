import { UserModel } from '../models/user'

export const getAllUsers = async () => {
  return await UserModel.find()
}

export const getUser = async (query: object) => {
  return await UserModel.findOne(query)
}

export const getUserById = async (id: any) => {
  return await UserModel.findById(id)
}

export const createUser = async (body: any) => {
  return await UserModel.create(body)
}

export const updateUser = async (id: any, body: any) => {
  return await UserModel.findByIdAndUpdate(id, body, { new: true })
}

export const deleteUser = async (id: any) => {
  return await UserModel.findByIdAndDelete(id)
}
