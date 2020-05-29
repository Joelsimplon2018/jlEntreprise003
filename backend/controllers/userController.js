const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require("../config/config.json")

exports.register = function(req, res, next) {
  bcrypt.hash(req.body.password, 10).then(hash => {
    req.body.password = hash
    User.register(req.body)
      .then(user => (user ? res.json(user) : res.status(400).json({ message: "Error in subscription !" })))
      .catch(err => next(err))
  })
}

exports.getUser = function(req, res, next) {
  User.getUser(req.params)
    .then(function(user) {
      if (user) {
        //res.json(user);
        const token = jwt.sign(JSON.parse(JSON.stringify(user)), config.secret)
        res.status(200).send({ success: true, token })
        console.log("user get ", user)
      } else res.status(400).json({ message: `No user(s) ...` })
    })
    .catch(err => next(err))
}
