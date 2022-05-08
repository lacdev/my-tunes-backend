import { AlbumModel } from '../models/album'

export const getAllAlbums = async () => {
  return await AlbumModel.find().populate({
    path: 'songs artist genre',
  })
}

export const getAllAlbumsByGenreId = async (id: any) => {
  return await AlbumModel.find({ genre: id }).populate({
    path: 'artist songs genre',
  })
}

export const getAllAlbumsByArtistId = async (id: any) => {
  return await AlbumModel.find({ artist: id }).populate({
    path: 'artist songs genre',
  })
}

export const getAlbumById = async (id: any) => {
  return await AlbumModel.findById(id).populate({
    path: 'songs artist genre',
  })
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
