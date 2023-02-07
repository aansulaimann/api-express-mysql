const express = require('express')

// export routes users
const usersRoutes = require('./routes/users.js')

// middleware
const middlewareLogReq = require('./middleware/logs.js')

const app = express()

// middleware
app.use(middlewareLogReq)

// pattrn -> app.method('path', handler())
app.use('/users', usersRoutes)

app.use("/", (req, res, next) => {
    res.json({
        nama: "Aan Sulaiman",
        email: "aansulaiman92@gmail.com"
    })
})




app.listen(4000, () => {
    console.log(`Listening on port http://localhost:4000`)
})