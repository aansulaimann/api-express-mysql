require('dotenv').config()

const PORT = process.env.PORT || 3000
const express = require('express')

// export routes users
const usersRoutes = require('./routes/users.js')

// middleware
const middlewareLogReq = require('./middleware/logs.js')
const upload = require('./middleware/multer.js')

const app = express()

// middleware
app.use(middlewareLogReq)
app.use(express.json())
app.use('/assets', express.static('public/image'))

// pattrn -> app.method('path', handler())
app.use('/users', usersRoutes)

app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: "Upload berhasil"
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})