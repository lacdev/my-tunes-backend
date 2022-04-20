import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from '../usecases/user'

export const handleGetUsers = async (req, res) => {
  try {
    const users = await getAllUsers()
    res.send({ response: users })
  } catch (e) {
    console.error(e)
  }
}

export const handleGetUser = async (req, res) => {
  try {
    const { userId } = req.params
    const user = await getUserById(userId)
    res.send({ response: user })
  } catch (e) {
    console.error(e)
  }
}

export const handleUserCreate = async (req, res) => {
  try {
    const body = req.body
    const user = await createUser(body)
    res.send({ status: 200, response: user })
  } catch (e) {
    console.error(e)
  }
}

export const handleUserUpdate = async (req, res) => {
  try {
    const { userId } = req.params
    const body = req.body
    const user = await updateUser(userId, body)
    res.send({ status: 200, response: user })
  } catch (e) {
    console.error(e)
  }
}

export const handleUserDelete = async (req, res) => {
  try {
    const { userId } = req.params
    const user = await deleteUser(userId)
    res.send({ status: 204, response: user })
  } catch (e) {
    console.error(e)
  }
}
