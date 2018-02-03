import { Router } from 'express'

export default Router()
	.get('/:difficulty', (req, res) => {
		let difficulty = req.params.difficulty;

		res.json([
			{
				id: 1,
				num1: 18,
				symbol1: '+',
				num2: 5
			},
			{
				id: 2,
				num1: 11,
				symbol1: '-',
				num2: 4
			},
			{
				id: 3,
				num1: 3,
				symbol1: '-',
				num2: 12
			},
		]);
	});
