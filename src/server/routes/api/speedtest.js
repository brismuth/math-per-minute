import { Router } from 'express'

export default Router()
	.post('/score', (req, res) => {
		console.log({
			logtype: 'info',
			time: new Date(),
			correct: req.body.correct,
			incorrect: req.body.incorrect,
			ua: req.get('User-Agent'),
			ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
		})

		res.json({message: 'score recorded'});
	});
