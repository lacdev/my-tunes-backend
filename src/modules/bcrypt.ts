import bcrypt from 'bcrypt'

const DEFAULT_SALT_ROUNDS = 10

const hashPassword = async (password: string) =>
  await bcrypt.hash(password, DEFAULT_SALT_ROUNDS)

const comparePassword = async (password: string, dbHash: string) =>
  await bcrypt.compare(password, dbHash)

export { hashPassword, comparePassword }
