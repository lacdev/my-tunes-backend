import { Schema, model } from 'mongoose'
import { User } from './user'
import { Album } from './album'
import { Song } from './song'
import { Cart } from './cart'
import { Address } from './address'
import { Product } from './product'

export interface PaymentResult {
  id: string
  status: string
  update_time: string
  email_address: string
}

export interface Order {
  _id: string
  customerId: User
  orderItems: []
  amount: number
  items: Song[] | Album[]
  address: object
  cartId: Cart
  paymentMethod: string
  paymentResult: PaymentResult
  taxPrice: number
  shippingPrice: number
  totalPrice: number
  isPaid: boolean
  paidAt: Date
  isDelivered: boolean
  deliveredAt: Date
  status: 'pending' | 'fulfilled'
}

export const OrderSchema = new Schema<Order>(
  {
    customerId: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    orderItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true, default: 0 },
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'product',
        },
      },
    ],
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
    address: { type: Schema.Types.ObjectId, required: true, ref: 'address' },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
)

export const OrderModel = model<Order>('order', OrderSchema)
