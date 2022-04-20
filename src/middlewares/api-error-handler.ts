import { ApiError } from '../errors/ApiError'

export const ApiErrorHandler = (err: any, req: any, res: any, next: any) => {
  //Don't console log in production because it is not async
  console.error(err)

  if (err instanceof ApiError) {
    res.status(err.code).json(err.message)
    return
  }

  res.status(500).json('Something went wrong.')
}
