import Router from 'express'
import BaseRoute from './routes/BaseRoute'
import DealRoute from './routes/DealRoute'

//Creating router
const router = Router()

//Adding routes
router.use(DealRoute)
router.use(BaseRoute)

export default router