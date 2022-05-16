import { Schema, model } from 'mongoose'
import { Album } from './album'
import { Artist } from './artist'
import { Genre } from './genre'

export interface Product {
  _id: string
  description: string
  album: Album
  genre: Genre
  artist: Artist
  format: 'cassette' | 'vinyl' | 'CD'
  price: number
  stock: number
}

export const ProductSchema = new Schema<Product>(
  {
    description: { type: String, required: true },
    album: { type: Schema.Types.ObjectId, required: true, ref: 'album' },
    genre: { type: Schema.Types.ObjectId, required: true, ref: 'genre' },
    artist: { type: Schema.Types.ObjectId, required: true, ref: 'artist' },
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
