import Router, { Request, Response, NextFunction } from 'express'

const router = Router()

router.all('*', (request: Request, response: Response, next: NextFunction) => {
    response.statusCode = 404
    response.end()
}) 

export default router