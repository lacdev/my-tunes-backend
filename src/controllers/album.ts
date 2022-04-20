import {
  createAlbum,
  deleteAlbum,
  getAlbumById,
  getAllAlbums,
  updateAlbum,
} from '../usecases/album'

export const handleGetAlbums = async (req, res) => {
  try {
    const albums = await getAllAlbums()
    res.send({ response: albums })
  } catch (e) {
    console.error()
  }
}

export const handleGetAlbum = async (req, res) => {
  try {
    const { albumId } = req.params
    const album = await getAlbumById(albumId)
    res.send({ response: album })
  } catch (e) {
    console.error(e)
  }
}

export const handleAlbumCreate = async (req, res) => {
  try {
    const body = req.body
    const album = await createAlbum(body)
    res.send({ status: 200, response: album })
  } catch (e) {
    console.error(e)
  }
}

export const handleAlbumUpdate = async (req, res) => {
  try {
    const { albumId } = req.params
    const body = req.body
    const album = await updateAlbum(albumId, body)
    res.send({ status: 200, response: album })
  } catch (e) {
    console.error(e)
  }
}

export const handleAlbumDelete = async (req, res) => {
  try {
    const { albumId } = req.params
    const album = await deleteAlbum(albumId)
    res.send({ status: 204, response: album })
  } catch (e) {
    console.error(e)
  }
}
