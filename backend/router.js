const express = require("express")
const router = express.Router()
const userController = require("./controllers/userController")
const prestataireController = require("./controllers/prestataireController")

// User routes
router.post("/register", userController.register)

// Prestataires routes
router.post("/prestataireRegister", prestataireController.createPrestataire)
router.get("/prestataires", prestataireController.getPrestataires)
router.get("/prestataires/:id", prestataireController.getPrestataires)
router.patch("/prestataires/:id", prestataireController.updatePrestataire)
router.delete("/prestataires/:id", prestataireController.deletePrestataire)

module.exports = router
