import { ArtistModel } from '../models/artist'

export const getAllArtists = async () => {
  return await ArtistModel.find()
}

export const getArtistById = async (id: any) => {
  return await ArtistModel.findById(id)
}

export const createArtist = async (body: any) => {
  return await ArtistModel.create(body)
}

export const updateArtist = async (id: any, body: any) => {
  return await ArtistModel.findByIdAndUpdate(id, body, { new: true })
}

export const deleteArtist = async (id: any) => {
  return await ArtistModel.findByIdAndDelete(id)
}
