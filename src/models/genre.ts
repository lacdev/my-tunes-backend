import { Schema, model } from 'mongoose'

export interface Genre {
  _id: string
  description: string
}

const genreSchema = new Schema<Genre>({
  description: { type: String, required: true },
})

export const GenreModel = model<Genre>('genre', genreSchema)

export interface getGenreByIdDTO {
  _id: string
}
export interface CreateGenreDTO {
  description: string
}
export interface UpdateGenreDTO {
  _id: string
  description: string
}
export interface deleteGenreDTO {
  _id: string
}
