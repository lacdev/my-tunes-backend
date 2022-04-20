import { Schema, model } from 'mongoose'
import { Album } from './album'
import { Song } from './song'

export interface Artist {
  _id: string
  name: string
  lastName: string
  country: string
  albums?: Album[]
  songs?: Song[]
}

const artistSchema = new Schema<Artist>({
  name: { type: String, required: true },
  lastName: { type: String },
  country: { type: String },
  albums: [{ type: Schema.Types.ObjectId, required: true, ref: 'album' }],
  songs: [{ type: Schema.Types.ObjectId, required: true, ref: 'song' }],
})

export const ArtistModel = model<Artist>('artist', artistSchema)

export interface getArtistByIdDTO {
  _id: string
}
export interface CreateArtistDTO {
  name: string
  lastName: string
  country: string
}
export interface UpdateArtistDTO {
  _id: string
  name: string
  lastName: string
  country: string
}
export interface deleteArtistDTO {
  _id: string
}
