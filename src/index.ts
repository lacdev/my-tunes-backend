import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import { run } from './modules/db'

// Routers
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
app.use('/genre', genreRouter)
app.use('/artist', artistRouter)
app.use('/song', songRouter)
app.use('/album', albumRouter)
app.use('/user', userRouter)

// Health endpoint
app.get('/', (req, res) => res.send({ response: 'Hello world' }))

app.listen(8000, async () => {
  await run()
  console.log(`App listening on port 8000`)
})
