const cors = require('cors')
const express = require('express')
const Stripe = require('stripe')

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




module.exports = router