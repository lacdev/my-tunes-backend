import { Schema, model } from 'mongoose'
import { Album } from './album'
import { Artist } from './artist'
import { Genre } from './genre'

export interface Song {
  _id: string
  title: string
  artist: Artist
  releaseDate: Date
  album?: Album
  genre: Genre
  previewFile?: string
  fullFile?: string
  price?: number
  trackNumber: number
  duration?: number
}

export const songSchema = new Schema<Song>({
  title: { type: String, required: true },
  artist: { type: Schema.Types.ObjectId, required: true, ref: 'artist' },
  releaseDate: { type: Date, required: true, default: new Date() },
  album: { type: Schema.Types.ObjectId, ref: 'album', required: true },
  genre: { type: Schema.Types.ObjectId, ref: 'genre', required: true },
  trackNumber: { type: Number, required: true },
  previewFile: { type: String, required: true },
  fullFile: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
})

export const SongModel = model<Song>('song', songSchema)

export interface getSongByIdDTO {
  songId: string
}
export interface CreateSongDTO {
  title: string
  artist: Artist
  album?: Album
  price?: number
}
export interface UpdateSongDTO {
  songId: string
  title: string
  artist: Artist
  album?: Album
  price?: number
}
export interface deleteSongDTO {
  songId: string
}
