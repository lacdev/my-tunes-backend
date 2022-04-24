import { Router, Request, Response } from 'express'
import {
  handleAlbumCreate,
  handleAlbumUpdate,
  handleGetAlbum,
  handleGetAlbums,
} from '../controllers/album'
import { UserModel } from '../models/user'

const router = Router()

router.post('/register', (req: Request, res: Response) => {
  const newUser = new UserModel({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  })
})

router.post('/login', () => {
  const newUser = new UserModel()
})

export { router as authRouter }
