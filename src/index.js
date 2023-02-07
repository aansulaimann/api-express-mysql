const express = require('express')

// export routes users
const usersRoutes = require('./routes/users.js')

// middleware
const middlewareLogReq = require('./middleware/logs.js')

const app = express()

// middleware
app.use(middlewareLogReq)
app.use(express.json())

// pattrn -> app.method('path', handler())
app.use('/users', usersRoutes)

app.listen(4000, () => {
    console.log(`Listening on port http://localhost:4000`)
})