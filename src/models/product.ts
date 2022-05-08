import { Schema, model } from 'mongoose'
import { Album } from './album'

export interface Product {
  _id: string
  album: Album
  price: number
  quantity: number
  images: string[]
  format: string
  description: string
}

const ProductSchema = new Schema<Product>(
  {
    album: { type: Schema.Types.ObjectId, required: true, ref: 'album' },
    price: { type: Number, required: true },
    quantity: { type: Number },
    images: [{ type: String }],
    format: { type: String, required: true },
    description: { type: String, required: true },
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
