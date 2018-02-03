import { Router } from 'express'

export default Router()
	.get('/:difficulty', (req, res) => {
		let difficulty = req.params.difficulty;

		res.json([
			{
				"userId": 1,
				"id": 1,
				"title": "Title 1",
				"body": "Body 1"
			},
			{
				"userId": 1,
				"id": 2,
				"title": "Title 2",
				"body": "Body 2"
		}]);
	});
