import { Express, Request, Response } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { version } from '../../package.json'
import colors from 'colors'

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Rest API Docs',
      version: version,
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts', './src/index.ts'],
}

const specs = swaggerJsdoc(options)

export default function swaggerDocs(app: Express, port: number | string) {
  // swagger page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))
  // Docs in JSON Format
  app.get('docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(specs)
  })

  console.log(colors.magenta(`Docs available at http://localhost:8013/docs `))
}
