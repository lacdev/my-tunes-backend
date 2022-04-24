import { connect } from 'mongoose'

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME
const DB_HOST = process.env.DB_HOST

const URL = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

export const run = async () => {
  try {
    return await connect(URL)
  } catch (e) {
    console.error(e)
  }
}
