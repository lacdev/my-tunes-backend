import { Schema, model } from 'mongoose'
import { User } from './user'
import { Song } from './song'

export interface Playlist {
  _id: string
  userId: User
  songs?: Song[]
}

const playlistSchema = new Schema<Playlist>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    songs: [{ type: Schema.Types.ObjectId, required: true, ref: 'song' }],
  },
  { timestamps: true }
)

export const playlistModel = model<Playlist>('playlist', playlistSchema)
