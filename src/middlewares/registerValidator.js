import { ROLES } from '../models/Role'
import User from '../models/User'

export const checkIfUsernameOrEmailIsDuplicated = async (req, res, next) => {
    const submittedUser = req.body.username
    const user = await User.findOne({ username: submittedUser})
    if (user) {
        return res.status(400).json({ message: 'User already exists'})
    }

    const submittedEmail = req.body.email
    const email = await User.findOne({ email: submittedEmail})
    if (email) {
        return res.status(400).json({ message: 'Email already exists'})
    }
    next()
}

export const checkIfRolesExist = (req, res, next) => {
	const submittedRoles = req.body.roles
	if (submittedRoles) {
		for (let i = 0; i < submittedRoles.length; i++) {
			if (!ROLES.includes(submittedRoles[i])) {
				return res.status(400).json({
					message: `Role ${submittedRoles[i]} does not exist`,
				})
			}
		}
    }
    next()
}
