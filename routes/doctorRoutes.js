const express = require("express");
const router = express.Router();
const doctorController = require("../controller/doctorsController ");

// Routes liées aux médecins
router.post("/register", doctorController.registerDoctor);
router.get("/:doctorId", doctorController.getDoctorDetails);
router.put("/:doctorId", doctorController.updateDoctorDetails);
router.get("/:doctorId/patients", doctorController.getDoctorPatients);

module.exports = router;
