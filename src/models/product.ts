import { Schema, model } from 'mongoose'

export interface User {
  _id: string
  title: string
  description: string
  category: []
  price: number
  image: string
}

const ProductSchema = new Schema<User>(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    image: { type: String },
  },
  { timestamps: true }
)

export const UserModel = model<User>('product', ProductSchema)
export interface LoginDTO {
  userName?: string
  email?: string
  password: string
}

export interface LoginEmailDTO {
  email: string
  password: string
}

export interface LoginUsernameDTO {
  userName: string
  password: string
}
