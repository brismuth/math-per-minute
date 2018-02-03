import { Router } from 'express'
import { default as speedtest } from './speedtest.js'
import { default as user } from './user.js'

export default Router()
	.use('/speedtest', speedtest)
	.use('/user', user)

	.get('*', (req, res) => {
		res.status(404).json({error: 'endpoint not found'});
	})
