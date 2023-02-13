const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {

    try {

        const [data] = await UsersModel.getAllUsers()

        res.json({
            message: "GET all users success",
            data: data
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const createNewUsers = async (req, res) => {
    const bodyPayload = req.body

    // atau
    // const { body } = req

    try {
        await UsersModel.createNewUsers(bodyPayload)

        res.json({
            message: "CREATE new user success",
            data: bodyPayload
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const updateUser = async (req, res) => {
    const { idUser } = req.params
    const { body } = req

    try {
        await UsersModel.updateUser(body, idUser)

        res.json({
            message: "UPDATE user success",
            data: {
                id: idUser,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }

}

const deleteUser = (req, res) => {
    const { idUser } = req.params
    res.json({
        message: "DELETE user success",
        data: {
            id: idUser,
            name: "aan",
            email: "aans@mail.com",
            address: "Jakarta"
        }
    })
}

module.exports = { getAllUsers, createNewUsers, updateUser, deleteUser }