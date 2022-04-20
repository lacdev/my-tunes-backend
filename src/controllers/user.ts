import { UserModel } from '../models/user'
import jwt from 'jsonwebtoken'

export const getUserById = async (id: any) => {
  return await UserModel.findById(id)
}
