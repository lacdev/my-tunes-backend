import { Schema, model } from 'mongoose'
import { Album } from './album'
import { Artist } from './artist'
import { Genre } from './genre'
import { Song } from './song'

export interface Transaction {}

export const transactionSchema = new Schema(
  {
    customerId: String,
  },
  { timestamps: true }
)

export const TransactionModel = model<Transaction>(
  'transaction',
  transactionSchema
)
