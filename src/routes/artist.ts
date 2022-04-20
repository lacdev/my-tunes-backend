import { Router } from 'express'
import {
  handleArtistCreate,
  handleArtistDelete,
  handleArtistUpdate,
  handleGetArtist,
  handleGetArtists,
} from '../controllers/artist'

const router = Router()

router.get('/', handleGetArtists)
router.get('/:artistId', handleGetArtist)
router.post('/', handleArtistCreate)
router.patch('/:artistId', handleArtistUpdate)
router.delete('/:artistId', handleArtistDelete)

export { router as artistRouter }
