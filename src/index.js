require('dotenv').config()

const PORT = process.env.PORT || 3000
const express = require('express')

// export routes users
const usersRoutes = require('./routes/users.js')

// middleware
const middlewareLogReq = require('./middleware/logs.js')

const app = express()

// middleware
app.use(middlewareLogReq)
app.use(express.json())
app.use('/assets', express.static('public/image'))

// pattrn -> app.method('path', handler())
app.use('/users', usersRoutes)

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})