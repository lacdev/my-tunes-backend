import { Schema, model } from 'mongoose'
import { Artist } from './artist'
import { Genre } from './genre'
import { Song } from './song'

export interface Album {
  _id: string
  title: string
  artist: Artist
  releaseDate: Date
  songs: Song[]
  price: number
  genre: Genre
  stock: number
  image: string
}

const albumSchema = new Schema<Album>({
  title: { type: String, required: true },
  artist: { type: Schema.Types.ObjectId, required: true, ref: 'artist' },
  releaseDate: { type: Date, required: true, default: new Date() },
  songs: [{ type: Schema.Types.ObjectId, required: true, ref: 'song' }],
  price: { type: Number, required: true },
  genre: { type: Schema.Types.ObjectId, ref: 'genre', required: true },
  stock: { type: Number, required: true },
  image: { type: String, required: true },
})

export const AlbumModel = model<Album>('album', albumSchema)