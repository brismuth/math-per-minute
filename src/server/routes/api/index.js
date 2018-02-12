import { Router } from 'express'
import { default as speedtest } from './speedtest.js'
import { default as user } from './user.js'
import bodyParser from 'body-parser'

export default Router()
	.use(bodyParser.json())
	.use('/speedtest', speedtest)
	.use('/user', user)

	.get('*', (req, res) => {
		res.status(404).json({error: 'endpoint not found'});
	})
