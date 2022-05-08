import { Schema, model } from 'mongoose'

export interface Genre {
  _id: string
  name: string
}

const genreSchema = new Schema<Genre>(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
)

export const GenreModel = model<Genre>('genre', genreSchema)

export interface getGenreByIdDTO {
  genreId: string
}
export interface CreateGenreDTO {
  name: string
}
export interface UpdateGenreDTO {
  genreId: string
  name: string
}
export interface deleteGenreDTO {
  genreId: string
}
