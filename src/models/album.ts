import { Schema, model } from 'mongoose'
import { Artist } from './artist'
import { Genre } from './genre'
import { Song } from './song'

export interface Album {
  _id: string
  title: string
  artist: Artist
  releaseDate: Date
  songs?: Song[]
  genre: Genre
  image?: string
  label?: string
}

export const albumSchema = new Schema<Album>(
  {
    title: { type: String, required: true },
    artist: { type: Schema.Types.ObjectId, required: true, ref: 'artist' },
    releaseDate: { type: Date, required: true, default: new Date() },
    label: { type: String, required: true },
    songs: [{ type: Schema.Types.ObjectId, ref: 'song' }],
    genre: { type: Schema.Types.ObjectId, ref: 'genre', required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
)

export const AlbumModel = model<Album>('album', albumSchema)

export interface getAlbumByIdDTO {
  albumId: string
}
export interface CreateAlbumDTO {
  name: string
  releaseDate: string
  artist: string
  songs: Song[]
  price: number
  genre: Genre
  stock: number
}
export interface UpdateAlbumDTO {
  albumId: string
  releaseDate: string
  name: string
  singer: string
  songs: Song[]
  price: number
  genre: Genre
}
export interface deleteAlbumDTO {
  albumId: string
}
