import { Schema, model } from 'mongoose'

export interface User {
  _id: string
  username: string
  email: string
  password: string
  type: 'admin' | 'customer'
}

const userSchema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true, default: 'customer' },
})

export const UserModel = model<User>('user', userSchema)
