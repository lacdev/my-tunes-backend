import jwt from 'jsonwebtoken'
import { ApiError } from '../errors/ApiError'

const verifyToken = async (req, res, next) => {
  try {
    const SECRET = process.env.JWT_SECRET

    const tokenHeaders = req.header('authorization')

    if (!tokenHeaders) {
      next(ApiError.unauthorized('Not a valid token was provided.'))
      return
    }

    const tokenArray = tokenHeaders.split(' ')

    const token = tokenArray[1]

    if (!token) {
      next(ApiError.unauthorized('Unathorized Access. Token not provided.'))
    }

    const decoded = jwt.verify(token, SECRET)

    if (!decoded) {
      next(
        ApiError.unauthorized('Unathorized Access. A valid token is required.')
      )
    }

    req.user = decoded

    /* Req.user is going to be equal to the decoded identity object from the user.
     req.user = { 
      id: mongoId, 
      username: exampleUserName
      email: exampleEmail 
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

export { verifyToken }
