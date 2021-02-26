// [EXPORT] //
module.exports = {
	services: {
		permanentMakeup: [
			{
				id: 'pm-cb',
				type: 'permanentMakeup',
				name: 'Combination Brow',
				price: 550,
			},
			{
				id: 'pm-ob',
				type: 'permanentMakeup',
				name: 'Ombre Brow',
				price: 500,
			},
			{
				id: 'pm-m',
				type: 'permanentMakeup',
				name: 'Microblading',
				price: 500,
			},
			{
				id: 'pm-ele',
				type: 'permanentMakeup',
				name: 'Eyeline lash Enhancement',
				price: 400,
			},
			{
				id: 'pm-e',
				type: 'permanentMakeup',
				name: 'Eyeliner',
				price: 400,
			},
			{
				id: 'pm-flc',
				type: 'permanentMakeup',
				name: 'Full Lip Color',
				price: 550,
			},
			{
				id: 'pm-ll',
				type: 'permanentMakeup',
				name: 'Lip Liner',
				price: 400,
			},
			{
				id: 'pm-bm',
				type: 'permanentMakeup',
				name: 'Beauty Mark',
				price: 150,
			},
			{
				id: 'pm-f',
				type: 'permanentMakeup',
				name: 'Freckles',
				price: 200,
			},
		],

		bestSellers: [
			{
				title: 'Classic/Natural',
				types: [
					{
						id: 'bs-cn-1',
						type: 'bestSellers Classic/Natural',
						name: 'Week 1',
						price: 48,
					},
					{
						id: 'bs-cn-2',
						type: 'bestSellers Classic/Natural',
						name: 'Week 2',
						price: 78,
					},
					{
						id: 'bs-cn-3',
						type: 'bestSellers Classic/Natural',
						name: 'Week 3',
						price: 86,
					},
					{
						id: 'bs-cn-4',
						type: 'bestSellers Classic/Natural',
						name: 'Week 4 (Full Set)',
						price: 145,
					},
				],
			},
			{
				title: 'Hybrid',
				types: [
					{
						id: 'bs-h-1',
						type: 'bestSellers Hybrid',
						name: 'Week 1',
						price: 54,
					},
					{
						id: 'bs-h-2',
						type: 'bestSellers Hybrid',
						name: 'Week 2',
						price: 89,
					},
					{
						id: 'bs-h-3',
						type: 'bestSellers Hybrid',
						name: 'Week 3',
						price: 96,
					},
					{
						id: 'bs-h-4',
						type: 'bestSellers Hybrid',
						name: 'Week 4 (Full Set)',
						price: 160,
					},
				],
			},
			{
				title: 'Volume',
				types: [
					{
						id: 'bs-v-2',
						type: 'bestSellers Volume',
						name: 'Week 2',
						price: 100,
					},
					{
						id: 'bs-v-3',
						type: 'bestSellers Volume',
						name: 'Week 3',
						price: 139,
					},
					{
						id: 'bs-v-4',
						type: 'bestSellers Volume',
						name: 'Week 4 (Full Set)',
						price: 175,
					},
				],
			},
			{
				title: 'Mega Volume',
				types: [
					{
						id: 'bs-mv-2',
						type: 'bestSellers Mega Volume',
						name: 'Week 2',
						price: 135,
					},
					{
						id: 'bs-mv-3',
						type: 'bestSellers Mega Volume',
						name: 'Week 3',
						price: 155,
					},
					{
						id: 'bs-mv-4',
						type: 'bestSellers Mega Volume',
						name: 'Week 4 (Full Set)',
						price: 199,
					},
				],
			},
		],

		spa: [
			{
				id: 's-tw',
				type: 'spa',
				name: 'Teeth Whitening',
				price: 300,
			},
			{
				id: 's-bm',
				type: 'spa',
				name: 'Basic Makeup',
				price: 100,
			},
			{
				id: 's-gm',
				type: 'spa',
				name: 'Glam Makeup',
				price: 120,
			},
			{
				id: 's-3mf',
				type: 'spa',
				name: '30 Minute Facial',
				price: 60,
			},
			{
				id: 's-6mf',
				type: 'spa',
				name: '60 Minute Facial',
				price: 90,
			},
			{
				id: 's-hf',
				type: 'spa',
				name: 'High Frequency',
				price: 90,
			},
			{
				id: 's-lcp',
				type: 'spa',
				name: 'Luxury Chemical Peel',
				price: 110,
			},
			{
				id: 's-cf',
				type: 'spa',
				name: 'Chest Facial',
				price: 60,
			},
			{
				id: 's-bf',
				type: 'spa',
				name: 'Back Facial',
				price: 120,
			},
			{
				id: 's-ff',
				type: 'spa',
				name: 'Fancy Facial',
				price: 95,
			},
		]
	},
}