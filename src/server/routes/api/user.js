import { Router } from 'express'

export default Router()
	.get('/:userId', (req, res) => {
		console.log(req.params);
		res.json({
			userId: req.params.userId
		});
	})
