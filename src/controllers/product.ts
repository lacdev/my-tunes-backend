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

    if (products) {
      res.send({ response: products })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleGetProductsByGenre = async (req: Request, res: Response) => {
  try {
    const { genreId } = req.params

    const products = await getAllProductsByGenreId(genreId)

    if (products) {
      res.send({ response: products })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleGetProductsByFormat = async (
  req: Request,
  res: Response
) => {
  try {
    const { format } = req.query

    const products = await getAllProductsByFormat(format)

    if (products) {
      res.send({ response: products })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleGetProductsByArtist = async (
  req: Request,
  res: Response
) => {
  try {
    const { artistId } = req.params
    const products = await getAllProductsByArtistId(artistId)

    if (products) {
      res.send({ response: products })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleGetProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const products = await getProductById(productId)

    if (products) {
      res.send({ response: products })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleProductCreate = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const product = await createProduct(body)

    if (product) {
      res.send({ status: 200, response: product })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleProductUpdate = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const body = req.body
    const product = await updateProduct(productId, body)

    if (product) {
      res.send({ status: 200, response: product })
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleProductDelete = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const product = await deleteProduct(productId)

    if (product) {
      res.send({ status: 204, response: product })
    }
  } catch (e) {
    console.error(e)
  }
}
