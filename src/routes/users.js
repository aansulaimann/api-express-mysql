const express = require('express')

const router = express.Router()

router.get("/users", (req, res, next) => {
    res.json({
        message: "Get users Success"
    })
})

router.post('/users', (req, res) => {
    res.json({
        message: 'POST users Success'
    })
})

module.exports = router