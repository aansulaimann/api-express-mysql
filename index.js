const express = require('express')

const app = express()

// pattrn -> app.method('path', handler())

app.use("/", (req, res, next) => {
    res.json({
        nama: "Aan Sulaiman",
        email: "aansulaiman92@gmail.com"
    })
})


app.listen(4000, () => {
    console.log(`Listening on port http://localhost:4000`)
})