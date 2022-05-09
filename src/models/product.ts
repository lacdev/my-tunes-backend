import { Schema, model } from 'mongoose'
import { Album } from './album'
import { Genre } from './genre'

export interface Product {
  _id: string
  description: string
  album: Album
  genre: Genre
  image: string
  format: 'cassette' | 'vinyl' | 'CD'
  price: number
  stock: number
}

export const ProductSchema = new Schema<Product>(
  {
    description: { type: String, required: true },
    album: { type: Schema.Types.ObjectId, required: true, ref: 'album' },
    genre: { type: Schema.Types.ObjectId, required: true, ref: 'genre' },
    image: [{ type: String }],
    format: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    stock: { type: Number, default: 0 },
  },
  { timestamps: true }
)

export const ProductModel = model<Product>('product', ProductSchema)

// export interface LoginDTO {
//   userName?: string
//   email?: string
//   password: string
// }

// export interface LoginEmailDTO {
//   email: string
//   password: string
// }

// export interface LoginUsernameDTO {
//   userName: string
//   password: string
// }
