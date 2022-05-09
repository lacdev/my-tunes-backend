import { Schema, model } from 'mongoose'
import { User } from './user'

export interface Address {
  _id: string
  userId: User
  street: string
  city: string
  state: string
  country: string
  zipCode: string
  isDefault: boolean
}

export const AddressSchema = new Schema<Address>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: String, required: true },
    isDefault: { type: Boolean },
  },
  { timestamps: true }
)

export const AddressModel = model<Address>('user', AddressSchema)
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
