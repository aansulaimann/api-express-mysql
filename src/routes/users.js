const express = require('express')

// export controllers
const userController = require('../controller/users.js')

const router = express.Router()

// router.get("/", (req, res, next) => {
//     res.json({
//         message: "Get users Success"
//     })
// })

router.get("/", userController.getAllUsers)

router.post('/', userController.createNewUsers)

module.exports = router