import { createUser } from '../usecases/user'
import { ApiError } from '../errors/ApiError'
import { hashPassword } from '../modules/bcrypt'
import { Request, Response, NextFunction } from 'express'
import gravatar from 'gravatar'

const saveUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password, email } = req.body

    const secureUrl = gravatar.url(
      email,
      { s: '128', r: 'g', d: 'identicon' },
      true
    )

    const hashedPassword = await hashPassword(password)

    const savedUser = await createUser({
      username,
      password: hashedPassword,
      email,
      avatar: secureUrl,
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

export { saveUser }
