import { Router } from 'express'
const router = Router()

import * as productsController from '../controllers/products.controller'
import { isAdmin, isModerator, verifyToken } from '../middlewares'

router.get('/', productsController.getAllProducts)
router.post('/', [verifyToken, isModerator], productsController.createProduct)
router.get('/:productId', productsController.getProduct)
router.put(
	'/:productId',
	[verifyToken, isAdmin],
	productsController.updateProduct
)
router.delete(
	'/:productId',
	[verifyToken, isAdmin],
	productsController.deleteProduct
)

export default router
