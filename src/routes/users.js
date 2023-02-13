const express = require('express')

// export controllers
const userController = require('../controller/users.js')

const router = express.Router()

// router.get("/", (req, res, next) => {
//     res.json({
//         message: "Get users Success"
//     })
// })

// CREATE - POST
router.post('/', userController.createNewUsers)

// READ - GET
router.get("/", userController.getAllUsers)

// UPDATE - PATCH
router.patch("/:idUser", userController.updateUser)

// DELETE - DELETE
router.delete("/:idUser", userController.deleteUser)

module.exports = router