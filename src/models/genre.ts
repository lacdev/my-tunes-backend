import { Schema, model } from 'mongoose'

export interface Genre {
  _id: string
  description: string
}

const genreSchema = new Schema<Genre>(
  {
    description: { type: String, required: true },
  },
  { timestamps: true }
)

export const GenreModel = model<Genre>('genre', genreSchema)

export interface getGenreByIdDTO {
  genreId: string
}
export interface CreateGenreDTO {
  description: string
}
export interface UpdateGenreDTO {
  genreId: string
  description: string
}
export interface deleteGenreDTO {
  genreId: string
}
