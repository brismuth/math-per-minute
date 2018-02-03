import { Router } from 'express'

export default Router()
	.get('/:difficulty', (req, res) => {
		let difficulty = req.params.difficulty;


		res.json({error: 'do it on the client side'});
	});
