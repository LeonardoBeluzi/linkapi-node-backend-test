import Router from 'express'
import DealController from '../controllers/DealController'

const router = Router()

router.get('/deal', DealController.show)
router.post('/deal/sync', DealController.syncData)

export default router