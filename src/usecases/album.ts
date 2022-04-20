import { AlbumModel } from '../models/album'

export const getAllAlbums = async () => {
  return await AlbumModel.find()
}

export const getAlbumById = async (id: any) => {
  return await AlbumModel.findById(id)
}

export const createAlbum = async (body: any) => {
  return await AlbumModel.create(body)
}

export const updateAlbum = async (id: any, body: any) => {
  return await AlbumModel.findByIdAndUpdate(id, body, { new: true })
}

export const deleteAlbum = async (id: any) => {
  return await AlbumModel.findByIdAndDelete(id)
}
