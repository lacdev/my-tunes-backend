import { Request } from 'express'
export interface GetUserAuthInfoRequest extends Request {
  user: any
}
