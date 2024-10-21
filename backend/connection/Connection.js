const mysql = require('mysql')

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'medishare'
});

Connection.connect(function (err) {
    if (err) throw err;
    console.log('connected to database successfully')
})

module.exports = Connection