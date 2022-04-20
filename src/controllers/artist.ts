import {
  createArtist,
  deleteArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
} from '../usecases/artist'

export const handleGetArtists = async (req, res) => {
  const artists = await getAllArtists()

  res.send({ response: artists })
}

export const handleGetArtist = async (req, res) => {
  const { artistId } = req.params
  const artist = await getArtistById(artistId)
  res.send({ response: artist })
}

export const handleArtistCreate = async (req, res) => {
  const body = req.body
  const artist = await createArtist(body)
  res.send({ status: 200, response: artist })
}

export const handleArtistUpdate = async (req, res) => {
  const { artistId } = req.params
  const body = req.body
  const artist = await updateArtist(artistId, body)
  res.send({ status: 200, response: artist })
}

export const handleArtistDelete = async (req, res) => {
  const { artistId } = req.params
  const artist = await deleteArtist(artistId)
  res.send({ status: 204, response: artist })
}
