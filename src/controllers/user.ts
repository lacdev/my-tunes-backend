import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from '../usecases/user'

export const handleGetUsers = async (req, res) => {
  const users = await getAllUsers()
  res.send({ response: users })
}

export const handleGetUser = async (req, res) => {
  const { userId } = req.params
  const user = await getUserById(userId)
  res.send({ response: user })
}

export const handleUserCreate = async (req, res) => {
  const body = req.body
  const user = await createUser(body)
  res.send({ status: 200, response: user })
}

export const handleUserUpdate = async (req, res) => {
  const { userId } = req.params
  const body = req.body
  const user = await updateUser(userId, body)
  res.send({ status: 200, response: user })
}

export const handleUserDelete = async (req, res) => {
  const { userId } = req.params
  const user = await deleteUser(userId)
  res.send({ status: 204, response: user })
}
