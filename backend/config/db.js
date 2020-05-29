const mysql = require("mysql2")
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.MYSQL_DB,
  password: process.env.DB_PASS,
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  waitForConnections: true
})

pool.getConnection(error => {
  if (!error) console.log("db conntected")
  else console.log("dn connexion fail")
})

module.exports = pool.promise()

// const mysql = require("mysql")
// var connection = mysql.createConnection({
//   host: "locatlhost",
//   user: "root",
//   password: "root",
//   database: "MonProjet_Ecole",
//   socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
// })
// connection.connect(err => {
//   if (err) {
//     throw err
//   }
//   console.log("Connected to database!")
// })

// module.exports = connection
