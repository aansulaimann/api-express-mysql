const getAllUsers = (req, res) => {
    res.json({
        message: "GET all users success",
    })
}

const createNewUsers = (req, res) => {
    console.log(req.body)
    res.json({
        message: "CREATE new user success",
        data: req.body
    })
}

module.exports = { getAllUsers, createNewUsers }