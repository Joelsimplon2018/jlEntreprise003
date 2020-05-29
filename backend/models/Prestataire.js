const db = require("../config/db")

async function createPrestataire({ title, name, imageUrl, email, city, competences, experience, materiels, tarif, telephone }) {
  var sql = `INSERT INTO prestataires (title, name, imageUrl, email, city, competences, experience, materiels, tarif,telephone) VALUES ("${title}", "${name}","${imageUrl}", "${email}", "${city}","${competences}", "${experience}", "${materiels}", "${tarif}", "${telephone}")`
  return new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (err) {
        //console.log("service :whoops tvshow existe déjà");
        reject(err)
      } else {
        let prestataire = results
        //console.log("service : tvshow ajouté ! ", tvshow);
        resolve(prestataire)
      }
    })
  })
}

async function getPrestataires({ id }) {
  var sql
  if (!id) sql = `SELECT * FROM prestataires`
  else sql = `SELECT * FROM prestataires WHERE id = ${id}`

  return new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (err) {
        reject(err)
      } else {
        if (!id) {
          let prestataire = results
          resolve(prestataire)
        } else {
          let prestataire = results[0]
          resolve(prestataire)
        }
      }
    })
  })
}

async function updatePrestataire({ id, title, name, imageUrl, email, competences, experience, materiels, tarif, telephone }) {
  var sql = `UPDATE prestataires SET id="${id}", title="${title}", name="${name}", imageUrl="${imageUrl}", email="${email}", competences="${competences}", experience="${experience}", materiels="${materiels}", tarif="${tarif}", telephone="${telephone}" WHERE id = "${id}"`
  return new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (err) {
        reject(err)
      } else {
        let prestataire = results
        resolve(prestataire)
      }
    })
  })
}

async function deletePrestataire({ id }) {
  var sql = `DELETE FROM prestataires WHERE id = ${id}`
  return new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (err) {
        reject(err)
      } else {
        let prestataire = results[0]
        resolve(prestataire)
      }
    })
  })
}

module.exports = {
  getPrestataires,
  createPrestataire,
  updatePrestataire,
  deletePrestataire
}
