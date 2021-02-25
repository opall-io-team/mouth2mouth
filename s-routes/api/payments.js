// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const Stripe = require('stripe')


// [REQUIRE] Personal //
const config = require('../../s-config/index')


// [USE] //
const router = express.Router().use(cors())


// [STRIPE] //
const stripe = Stripe(config.STRIPE_SECRET_KEY)


router.get(
	'/balance',
	async (req, res) => {
		try {
			const balance = await stripe.balance.retrieve()

			res.send({
				executed: true,
				status: true,
				message: 'Successfully retrieved balance',
				balance: balance,
			})
		}
		catch (err) {
			res.send({
				status: true,
				lit: true,
				message: `Error --> ${err}`,
			})
		}
	}
)


router.get(
	'/transactions',
	async (req, res) => {
		try {
			const balanceTransactions = await stripe.balanceTransactions.list({
				limit: 3,
			})

			res.send({
				executed: true,
				status: true,
				message: 'Successfully retrieved balance',
				balanceTransactions: balanceTransactions,
			})
		}
		catch (err) {
			res.send({
				status: true,
				lit: true,
				message: `Error --> ${err}`,
			})
		}
	}
)


router.get(
	'/charge',
	async (req, res) => {
		try {
			const charge = await stripe.charges.create({
				amount: 2000,
				currency: 'usd',
				source: 'tok_amex',
				description: 'My First Test Charge (created for API docs)',
			})

			res.send({
				executed: true,
				status: true,
				message: charge
			})
		}
		catch (err) {
			res.send({
				status: true,
				lit: true,
				message: `Error --> ${err}`,
			})
		}
	}
)

router.post(
	'/payment/:product_id', async (req, res) => {
		try {
			const { product, token } = req.body

			const customer = await stripe.customers.create({
				email: token.email,
				source: token.id
			})

			const result = await stripe.charges.create(
				{
					amount: product.price * 100,
					currency: "usd",
					customer: customer.id,
					receipt_email: token.email,
					description: `purchase of ${product.name}`,
					shipping: {
						name: token.card.name,
						address: {
							line1: token.card.address_line1,
							city: token.card.address_city,
							state: token.card.address_state,
							country: token.card.address_country,
							postal_code: token.card.address_zip,
						},
					}
				}
			)
			
			res.send({
				executed: false,
				status: false,
				message: result
			})
			
		}
		catch (err) {
			console.log('err', err)

			res.status(500).send({
				executed: false,
				status: false,
				message: err
			})
		}
	}
)


module.exports = router