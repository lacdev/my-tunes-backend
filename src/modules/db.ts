import { connect } from 'mongoose'
import colors from 'colors'

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME
const DB_HOST = process.env.DB_HOST

export const dbConnection = async () => {
  try {
    const URL = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
    return await connect(URL)
  } catch (error) {
    console.log(colors.red(`Error: ${error.message}`))
    process.exit(1)
  }
}
