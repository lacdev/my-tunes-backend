import { Schema, model } from 'mongoose'

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateUserInput:
 *       type: object
 *       required:
 *       - username
 *       - email
 *       - password
 *       properties:
 *         email:
 *           type: string
 *           default: jane.doe@example.com
 *         username:
 *           type: string
 *           default: jane.doe
 *         password:
 *           type: string
 *           default: password123
 */

export interface User {
  _id: string
  username: string
  email: string
  password: string
  isAdmin: boolean
  address?: string
  avatar?: string
}

export const UserSchema = new Schema<User>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    address: { type: String, default: '' },
    avatar: { type: String },
  },
  { timestamps: true }
)

export const UserModel = model<User>('user', UserSchema)
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
