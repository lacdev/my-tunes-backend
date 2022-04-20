import {
  createArtist,
  deleteArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
} from '../usecases/artist'

export const handleGetArtists = async (req, res) => {
  try {
    const artists = await getAllArtists()
    res.send({ response: artists })
  } catch (e) {
    console.error(e)
  }
}

export const handleGetArtist = async (req, res) => {
  try {
    const { artistId } = req.params
    const artist = await getArtistById(artistId)
    res.send({ response: artist })
  } catch (e) {
    console.error(e)
  }
}

export const handleArtistCreate = async (req, res) => {
  try {
    const body = req.body
    const artist = await createArtist(body)
    res.send({ status: 200, response: artist })
  } catch (e) {
    console.error(e)
  }
}

export const handleArtistUpdate = async (req, res) => {
  try {
    const { artistId } = req.params
    const body = req.body
    const artist = await updateArtist(artistId, body)
    res.send({ status: 200, response: artist })
  } catch (e) {
    console.error(e)
  }
}

export const handleArtistDelete = async (req, res) => {
  try {
    const { artistId } = req.params
    const artist = await deleteArtist(artistId)
    res.send({ status: 204, response: artist })
  } catch (e) {
    console.error(e)
  }
}
