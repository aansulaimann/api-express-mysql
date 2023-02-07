const getAllUsers = (req, res) => {
    const data = {
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

module.exports = { getAllUsers, createNewUsers }