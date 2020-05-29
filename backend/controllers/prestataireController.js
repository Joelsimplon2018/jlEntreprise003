const Prestataire = require("../models/Prestataire")

exports.createPrestataire = function(req, res, next) {
  Prestataire.createPrestataire(req.body)
    .then(function(Prestataire) {
      if (Prestataire) res.json(Prestataire)
      else res.status(400).json({ message: `controller : No Prestataire add ...` })
    })
    .catch(err => next(err))
}

exports.getPrestataires = function(req, res, next) {
  Prestataire.getPrestataires(req.params).then(function(Prestataire) {
    if (Prestataire) res.json(Prestataire)
    else
      res
        .status(400)
        .json({ message: `controller : No  ...` })
        .catch(err => next(err))
  })
}

exports.updatePrestataire = function(req, res, next) {
  Prestataire.updatePrestataire(req.body)
    .then(function(Prestataire) {
      if (Prestataire) res.json(Prestataire)
      else res.status(400).json({ message: `No Prestataire updated ...` })
    })
    .catch(err => next(err))
}

exports.deletePrestataire = function(req, res, next) {
  Prestataire.deletePrestataire(req.params)
    .then(function(Prestataire) {
      if (Prestataire) res.json(Prestataire)
      else res.status(400).json({ message: `No Prestataire deleted ...` })
    })
    .catch(err => next(err))
}
