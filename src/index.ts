import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import colors from 'colors'
import { dbConnection } from './modules/db'
import { ApiErrorHandler } from './middlewares/api-error-handler'
import { genreRouter } from './routes/genre'
import { artistRouter } from './routes/artist'
import { songRouter } from './routes/song'
import { albumRouter } from './routes/album'
import { userRouter } from './routes/user'
import { authRouter } from './routes/auth'
import { playlistRouter } from './routes/playlists'

const app = express()

// Middlewares
app.use(cors())
app.use(helmet())
app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Routers
app.use('/api/genres', genreRouter)
app.use('/api/artists', artistRouter)
app.use('/api/songs', songRouter)
app.use('/api/albums', albumRouter)
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/playlists', playlistRouter)

// Health endpoint
app.get('/', (_, res) => res.send({ response: 'Hello world' }))

const PORT = process.env.PORT || 8013

dbConnection()
  .then(() => {
    console.log(colors.cyan('Database connection success'))
    app.listen(PORT, () =>
      console.log(colors.yellow(`Server is up and listening on port ${PORT}`))
    )
  })
  .catch((err) => console.log(colors.red(`${err.message}`)))

//Errors Global Middleware
app.use(ApiErrorHandler)

// Gracefully restarts on unhandled errors and uncaught promises

process.on('uncaughtException', (err) => {
  console.log(colors.red(`ERROR: ${err}`))
  console.log(
    colors.red('Shutting down the server due to uncaught Exceptions.')
  )
  process.exit(1)
})

process.on('unhandledRejection', (err) => {
  console.log(colors.red(`ERROR: ${err}`))
  console.log(
    colors.red('Shutting down the server due to unhandled Promise rejection')
  )
  process.exit(1)
})
