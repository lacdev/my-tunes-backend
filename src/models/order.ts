import { Schema, model } from 'mongoose'
import { User } from './user'
import { Album } from './album'
import { Song } from './song'
import { Cart } from './cart'

export interface Order {
  _id: string
  customerId: User
  amount: number
  items: Song[] | Album[]
  address: object
  status: 'pending' | 'fulfilled'
  cartId: Cart
}

const OrderSchema = new Schema<Order>(
  {
    customerId: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    amount: { type: Number, required: true },
    cartId: { type: Schema.Types.ObjectId, required: true, ref: 'cart' },
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
