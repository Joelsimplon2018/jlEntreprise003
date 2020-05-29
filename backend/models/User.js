const db = require("../config/db")

async function register({ username, email, password, is_admin = 0 }) {
  var sql = `insert into users (username, email, password, is_admin) VALUES ('${username}', '${email}', '${password}', '${is_admin}');`
  var sqlUser = `SELECT * FROM users WHERE nom = '${username}'`
  return new Promise((resolve, reject) => {
    db.query(sqlUser, (err, results) => {
      db.query(sql, (err, results) => {
        if (err) reject(err)
        else {
          let user = results
          //console.log("user created! ", user);
          resolve(user)
        }
      })
    })
  })
}

async function getUser({ id }) {
  var sql
  if (!id) sql = `SELECT * FROM users`
  else sql = `SELECT * FROM users WHERE id_user = ${id}`
  return new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (err) {
        reject(err)
      } else {
        if (!id) {
          let user = results
          resolve(user)
        } else {
          let user = results[0]
          resolve(user)
        }
      }
    })
  })
}

module.exports = {
  register,
  getUser
}
