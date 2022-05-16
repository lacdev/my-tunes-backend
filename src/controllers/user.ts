import { Request, Response } from 'express'
import { GetUserAuthInfoRequest } from '../types/request'

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

    if (users) {
      res.send({ response: users })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleGetUser = async (
  req: GetUserAuthInfoRequest,
  res: Response
) => {
  try {
    console.log('user object?', req.user)
    // const { userId } = req.params
    const user = await getUserById(req.user.id)

    if (user) {
      res.send({ response: user })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleUserCreate = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const user = await createUser(body)

    if (user) {
      res.send({ status: 200, response: user })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleUserUpdate = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const body = req.body
    const user = await updateUser(userId, body)

    if (user) {
      res.send({ status: 200, response: user })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleUserDelete = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const user = await deleteUser(userId)

    if (user) {
      res.send({ status: 204, response: user })
    }
  } catch (e) {
    console.error(e)
  }
}
