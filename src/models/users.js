const dbPool = require('../config/database')

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users'
    return dbPool.execute(SQLQuery)
}

const createNewUsers = (body) => {
    const SQLQuery = `INSERT INTO users (name, email, address) VALUE('${body.name}', '${body.email}', '${body.address}')`

    return dbPool.execute(SQLQuery)
}

const updateUser = (body, idUser) => {
    const SQLQuery = `UPDATE users SET name='${body.name}', email='${body.email}', address='${body.address}' WHERE id='${idUser}'`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUser,
}