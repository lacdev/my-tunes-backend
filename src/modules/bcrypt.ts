import bcrypt from 'bcrypt'

const DEFAULT_SALT_ROUNDS = 10

export const hashPassword = async (password: string) =>
  await bcrypt.hash(password, DEFAULT_SALT_ROUNDS)

export const comparePassword = async (password: string, dbHash: string) =>
  await bcrypt.compare(password, dbHash)
