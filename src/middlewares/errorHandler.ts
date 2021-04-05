import { Request, Response, NextFunction } from 'express'

export default (error: Error, request: Request, response: Response, next: NextFunction) => {
    console.log(error.message)
    return response.status(500).send({ error: error.message })       
}