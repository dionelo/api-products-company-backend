import { Router } from 'express'
const router = Router()

import * as authController from '../controllers/auth.controller'
import {
	checkIfRolesExist,
	checkIfUsernameOrEmailIsDuplicated,
} from '../middlewares'

router.post(
	'/register',
	[checkIfRolesExist, checkIfUsernameOrEmailIsDuplicated],
	authController.register
)
router.post('/login', authController.login)

export default router
