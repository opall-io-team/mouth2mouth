const cors = require('cors')
const express = require('express')


const router = express.Router().use(cors())


router.get(
	'/',
	async (req, res) => {
		const lit = {
			status: true,
			lit: true,
			directory: __dirname,
		}
		res.send(lit)
	}
)


module.exports = router