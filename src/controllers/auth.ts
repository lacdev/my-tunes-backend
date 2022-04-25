import { createUser } from '../usecases/user'
import { getUser } from '../usecases/user'
import { ApiError } from '../errors/ApiError'
import { hashPassword, comparePassword } from '../modules/bcrypt'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import gravatar from 'gravatar'

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password, email } = req.body

    const avatarUrl = gravatar.url(
      email,
      { s: '128', r: 'g', d: 'identicon' },
      true
    )

    const hashedPassword = await hashPassword(password)

    const savedUser = await createUser({
      username,
      password: hashedPassword,
      email,
      avatar: avatarUrl,
      //   isAdmin: true,
    })

    if (savedUser) {
      res.json({
        success: true,
        description: 'New user account created successfully',
        statusCode: 201,
      })
    }
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(
        ApiError.badRequest({
          message: 'Validation Error',
          errors: err,
        })
      )
      return
    } else {
      console.log(err)
      next({})
    }
  }
}

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body

    const user = await getUser({ email: email })

    if (!user) {
      next(ApiError.badRequest('The email or password is incorrect.'))
      return
    }

    const match = await comparePassword(password, user.password)

    if (!match) {
      next(ApiError.badRequest('The email or password is incorrect.'))
      return
    }

    const SECRET = process.env.JWT_SECRET

    const payload = {
      user: user.username,
      isAdmin: user.isAdmin,
      id: user._id,
    }

    const signedJWT = jwt.sign(payload, SECRET, {
      algorithm: 'HS256',
      expiresIn: '24h',
    })

    res.json({ token: signedJWT })
  } catch (error) {
    console.log(error)
    next({})
  }
}

export { registerUser, loginUser }
