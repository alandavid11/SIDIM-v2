const mysql = require('prommise-mysql')

const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
})

function getConnection(){
    return connection;
}

module.exports = { getConnection }