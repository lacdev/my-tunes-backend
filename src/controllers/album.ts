import { model, Schema } from 'mongoose'
import { Genre } from '../models/genre'
import { Artist } from '../models/artist'
import { Song } from '../models/song'

export interface Album {
  _id: string
  name: string
  artist: Artist
  releaseDate: Date
  songs: Song[]
  price: number
  genre: Genre
  stock: number
  image: string
}

const schema = new Schema<Album>({
  name: { type: String, required: true },
  artist: { type: Schema.Types.ObjectId, ref: 'artist', required: true },
  releaseDate: { type: Date, required: true, default: new Date() },
  songs: [{ type: Schema.Types.ObjectId, ref: 'song' }],
  price: { type: Number, required: true },
  stock: { type: Number, required: true, default: 100 },
  genre: { type: Schema.Types.ObjectId, ref: 'genre', required: true },
  image: { type: String, required: true },
})

export const AlbumModel = model<Album>('album', schema)

export interface getAlbumByIdDTO {
  _id: string
}
export interface CreateAlbumDTO {
  name: string
  releaseDate: string
  singer: string
  songs: Song[]
  price: number
  genre: Genre
  stock: number
}
export interface UpdateAlbumDTO {
  _id: string
  releaseDate: string
  name: string
  singer: string
  songs: Song[]
  price: number
  genre: Genre
}
export interface deleteAlbumDTO {
  _id: string
}
