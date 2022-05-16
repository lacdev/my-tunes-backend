import { Schema, model } from 'mongoose'
import { User } from './user'
import { Album } from './album'
import { Song } from './song'

export interface Cart {
  _id: string
  customerId: User
  items: Song[] | Album[]
  total: number
}

export const CartSchema = new Schema<Cart>(
  {
    customerId: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    items: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

export const CartModel = model<Cart>('cart', CartSchema)
