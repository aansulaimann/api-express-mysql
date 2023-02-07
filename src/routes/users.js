const express = require('express')

// export controllers
const userController = require('../controller/users.js')

const router = express.Router()

// CREATE - POST
router.post('/', userController.createNewUsers)


// router.get("/", (req, res, next) => {
//     res.json({
//         message: "Get users Success"
//     })
// })

// READ - GET
router.get("/", userController.getAllUsers)

// UPDATE - PATCH


module.exports = router