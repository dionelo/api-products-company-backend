import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import pack from '../package.json'

import { createRoles } from './libs/initialSetup'

import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

const app = express()
createRoles()

app.set('pack', pack)

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept, x-access-token'
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	const p = app.get('pack')
	res.json({
		name: p.name,
		author: p.author,
		description: p.description,
		version: p.version,
	})
})

app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

export default app
