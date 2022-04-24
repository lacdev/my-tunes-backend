import { Request, Response } from 'express'

import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from '../usecases/user'

export const handleGetUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers()
    res.send({ response: users })
  } catch (e) {
    console.error(e)
  }
}

export const handleGetUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const user = await getUserById(userId)
    res.send({ response: user })
  } catch (e) {
    console.error(e)
  }
}

export const handleUserCreate = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const user = await createUser(body)
    res.send({ status: 200, response: user })
  } catch (e) {
    console.error(e)
  }
}

export const handleUserUpdate = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const body = req.body
    const user = await updateUser(userId, body)
    res.send({ status: 200, response: user })
  } catch (e) {
    console.error(e)
  }
}

export const handleUserDelete = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const user = await deleteUser(userId)
    res.send({ status: 204, response: user })
  } catch (e) {
    console.error(e)
  }
}
