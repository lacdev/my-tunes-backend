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

const app = express()

// Middlewares
app.use(cors())
app.use(helmet())
app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Routers
app.use('/genres', genreRouter)
app.use('/artists', artistRouter)
app.use('/songs', songRouter)
app.use('/albums', albumRouter)
app.use('/users', userRouter)

// Health endpoint
app.get('/', (req, res) => res.send({ response: 'Hello world' }))

app.listen(8000, async () => {
  await run()
  console.log(`App listening on port 8000`)
})

//Errors Global Middleware
app.use(ApiErrorHandler)

// Gracefully restarters on unhandled errors
// process.on("uncaughtException")
// process.on("unhandledRejection")
