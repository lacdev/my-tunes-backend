import { NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { Request, Response } from 'express'
export const validateRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers['authorization']?.replace('Bearer ', '')

  if (!token) {
    res.status(401), res.send({ error: 'Unauthorized' })
  } else {
    verify
  }
}
