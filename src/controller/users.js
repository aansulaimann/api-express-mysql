const getAllUsers = (req, res) => {
    const data = {
        id: "1",
        name: "aan sulaiman",
        email: "aan@gmail.com",
        address: "Jakarta"
    }
    res.json({
        message: "GET all users success",
        data: data
    })
}

const createNewUsers = (req, res) => {
    console.log(req.body)
    res.json({
        message: "CREATE new user success",
        data: req.body
    })
}

const updateUser = (req, res) => {
    const { idUser } = req.params
    console.log("idUser: ", idUser)

    res.json({
        message: "UPDATE user success",
        data: req.body
    })
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