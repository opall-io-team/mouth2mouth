// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')


// [REQUIRE] Personal // 
const config = require('./s-config')
const p_ = require('./s-routes/pages')
const p_about = require('./s-routes/pages/about')


// [EXPRESS] //
const app = express()
const server = http.createServer(app)


// [MONGOOSE-CONNECTION] //
mongoose.connect(
	config.MONG_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	},
	(err, connected) => {
		if (connected) { console.log('Mongoose Connected to DB') }
		else { console.log(`Mongoose Connection Error --> ${err}`) }
	}
)


// [USE] //
app.use(cors())


// [USE] Personal - Rate-Limiter / API / Pages //
app.use('/pages', p_)
app.use('/pages/about', p_about)


// [HEROKU] Set Static Folder for Heroku //
if (process.env.NODE_ENV == 'production') {
	app.use(express.static('client/dist'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
	})
}


// [PORT + LISTEN] //
const port = config.PORT
server.listen(port, () => { console.log(`Server Running on Port: ${port}`) })