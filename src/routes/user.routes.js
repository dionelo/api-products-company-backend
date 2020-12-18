import { Router } from 'express'
const router = Router()

import * as userController from '../controllers/user.controller'
import { checkIfRolesExist, isAdmin, verifyToken } from '../middlewares'

router.post(
	'/',
	[verifyToken, isAdmin, checkIfRolesExist],
	userController.createUser
)

export default router
