import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import { run } from './modules/db'
import { ApiErrorHandler } from './middlewares/api-error-handler'
import { genreRouter } from './routes/genre'
import { artistRouter } from './routes/artist'
import { songRouter } from './routes/song'
import { albumRouter } from './routes/album'
import { userRouter } from './routes/user'
import { authRouter } from './routes/auth'

const app = express()

// Middlewares
app.use(cors())
app.use(helmet())
app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Routers
app.use('api/genres', genreRouter)
app.use('api/artists', artistRouter)
app.use('api/songs', songRouter)
app.use('api/albums', albumRouter)
app.use('api/users', userRouter)
app.use('api/auth', authRouter)

// Health endpoint
app.get('/', (req, res) => res.send({ response: 'Hello world' }))

app.listen(8013, async () => {
  await run()
  console.log(`App listening on port 8013`)
})

//Errors Global Middleware
app.use(ApiErrorHandler)

// Gracefully restarts on unhandled errors
// process.on("uncaughtException")
// process.on("unhandledRejection")
