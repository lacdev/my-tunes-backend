import { Schema, model } from 'mongoose'
import { User } from './user'
import { Album } from './album'
import { Song } from './song'

export interface Order {
  _id: string
  customerId: User
  albumId?: Album
  songs?: Song[]
  amount: number
  items: []
  address: object
  status: 'pending' | 'fulfilled'
}

const OrderSchema = new Schema<Order>(
  {
    customerId: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    albumId: { type: Schema.Types.ObjectId, ref: 'album' },
    songs: [[{ type: Schema.Types.ObjectId, ref: 'song' }]],
    amount: { type: Number, required: true },
    items: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    address: { type: Object, required: true },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
)

export const OrderModel = model<Order>('order', OrderSchema)
