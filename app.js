const express = require('express')
const authRouter = require('./routes/auth-routes')

const app = express()
const PORT = 4004

// set view engine 
app.set('view engine', 'ejs')

app.use('/auth', authRouter)
app.get('/', (req, res) => {
	res.render('home')
})

app.listen(PORT, console.log(`server running on ${PORT}`))