const getAllUsers = (req, res) => {
    res.json({
        message: "GET all users success",
    })
}

const createNewUsers = (req, res) => {
    res.json({
        message: "CREATE new user success",
    })
}

module.exports = { getAllUsers, createNewUsers }