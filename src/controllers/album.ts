import {
  createAlbum,
  deleteAlbum,
  getAlbumById,
  getAllAlbums,
  updateAlbum,
} from '../usecases/album'

export const handleGetAlbums = async (req, res) => {
  const albums = await getAllAlbums()

  res.send({ response: albums })
}

export const handleGetAlbum = async (req, res) => {
  const { albumId } = req.params
  const album = await getAlbumById(albumId)
  res.send({ response: album })
}

export const handleAlbumCreate = async (req, res) => {
  const body = req.body
  const album = await createAlbum(body)
  res.send({ status: 200, response: album })
}

export const handleAlbumUpdate = async (req, res) => {
  const { albumId } = req.params
  const body = req.body
  const album = await updateAlbum(albumId, body)
  res.send({ status: 200, response: album })
}

export const handleAlbumDelete = async (req, res) => {
  const { albumId } = req.params
  const album = await deleteAlbum(albumId)
  res.send({ status: 204, response: album })
}
