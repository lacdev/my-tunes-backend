import { Request, Response } from 'express'
import {
  getAllProducts,
  getAllProductsByGenreId,
  getAllProductsByFormat,
  getAllProductsByArtistId,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../usecases/product'

export const handleGetProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts()
    res.send({ response: products })
  } catch (e) {
    console.error(e)
  }
}

export const handleGetAlbumsByGenre = async (req: Request, res: Response) => {
  try {
    const { genreId } = req.params

    const albums = await getAllProductsByGenreId(genreId)
    res.send({ response: albums })
  } catch (e) {
    console.error(e)
  }
}

export const handleGetAlbumsByArtist = async (req: Request, res: Response) => {
  try {
    const { artistId } = req.params
    const albums = await getAllProductsByArtistId(artistId)
    res.send({ response: albums })
  } catch (e) {
    console.error(e)
  }
}

export const handleGetAlbum = async (req: Request, res: Response) => {
  try {
    const { albumId } = req.params
    const album = await getProductById(albumId)
    res.send({ response: album })
  } catch (e) {
    console.error(e)
  }
}

export const handleAlbumCreate = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const album = await createProduct(body)
    res.send({ status: 200, response: album })
  } catch (e) {
    console.error(e)
  }
}

export const handleAlbumUpdate = async (req: Request, res: Response) => {
  try {
    const { albumId } = req.params
    const body = req.body
    const album = await updateProduct(albumId, body)
    res.send({ status: 200, response: album })
  } catch (e) {
    console.error(e)
  }
}

export const handleAlbumDelete = async (req: Request, res: Response) => {
  try {
    const { albumId } = req.params
    const album = await deleteProduct(albumId)
    res.send({ status: 204, response: album })
  } catch (e) {
    console.error(e)
  }
}
