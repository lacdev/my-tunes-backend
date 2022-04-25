import { NextFunction, Request, Response } from 'express'
import { ApiError } from '../errors/ApiError'
import jwt from 'jsonwebtoken'
import { GetUserAuthInfoRequest } from '../types/request'

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const SECRET = process.env.JWT_SECRET

    const tokenHeaders = req.header('authorization')

    if (!tokenHeaders) {
      next(ApiError.unauthorized('Not a valid token was provided.'))
      return
    }

    const tokenArray = (tokenHeaders as any).split(' ')

    const token = tokenArray[1]

    if (!token) {
      next(ApiError.unauthorized('Unauthorized Access. Token not provided.'))
    }

    const decoded = jwt.verify(token, SECRET)

    if (!decoded) {
      next(
        ApiError.unauthorized('Unauthorized Access. A valid token is required.')
      )
    }

    ;(req as any).user = decoded

    /* Req.user is going to be equal to the decoded identity object from the user.
     req.user = { 
      id: mongoId, 
      username: user1
      isAdmin: boolean
    } */

    next()
  } catch (err) {
    if (err.name === 'JsonWebTokenError') {
      next(ApiError.unauthorized({ error: err.message }))
    }

    if (err.name === 'TokenExpiredError') {
      next(ApiError.unauthorized({ error: err.message }))
    }
    console.error(err)
    next({})
  }
}

export const verifyAdmin = async (
  req: GetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const { isAdmin } = req.user

  if (isAdmin) {
    next()
  } else {
    next(ApiError.forbidden('Not authorized to perform this action.'))
    return
  }
}
