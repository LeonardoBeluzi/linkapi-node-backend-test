import { NextFunction, Request, Response } from 'express'
import Deal from '../models/Deal'

export default {
    async show(request: Request, response: Response, next: NextFunction) {
        try {
           const data = await Deal.find()
           response.send(data) 
        } catch (error) {
            next(error)     
        }        
    },

    async syncData(request: Request, response: Response, next: NextFunction) {

    }
}