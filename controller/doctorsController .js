// Import des modèles nécessaires
const Doctor = require("../models/doctorModel");
const HealthInstitution = require("../models/healthInstitutionModel");
const MedicalRecord = require("../models/medicalRecordModel");

const doctorsController = {
  // Route handler pour l'enregistrement des médecins
  registerDoctor: async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        gender,
        birthdate,
        contactNumber,
        specialization,
        healthInstitutionId,
      } = req.body;

      const institution = await HealthInstitution.findById(healthInstitutionId);
      if (!institution) {
        return res
          .status(400)
          .json({ error: "L'institution de santé spécifiée n'existe pas." });
      }

      const newDoctor = new Doctor({
        firstName,
        lastName,
        gender,
        birthdate,
        contactNumber,
        specialization,
        healthInstitution: healthInstitutionId,
      });

      await newDoctor.save();

      institution.doctors.push(newDoctor._id);
      await institution.save();

      res.status(201).json(newDoctor);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du médecin :", error);
      res
        .status(500)
        .json({ error: "Erreur lors de l'enregistrement du médecin." });
    }
  },

  // Route handler pour la récupération des détails d'un médecin
  getDoctorDetails: async (req, res) => {
    try {
      const { doctorId } = req.params;

      const doctor = await Doctor.findById(doctorId).populate(
        "healthInstitution"
      );

      if (!doctor) {
        return res
          .status(404)
          .json({ error: "Le médecin spécifié n'existe pas." });
      }

      res.status(200).json(doctor);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des détails du médecin :",
        error
      );
      res.status(500).json({
        error: "Erreur lors de la récupération des détails du médecin.",
      });
    }
  },

  // Route handler pour la mise à jour des détails d'un médecin
  updateDoctorDetails: async (req, res) => {
    try {
      const { doctorId } = req.params;
      const {
        firstName,
        lastName,
        gender,
        birthdate,
        contactNumber,
        specialization,
      } = req.body;

      const updatedDoctor = await Doctor.findByIdAndUpdate(
        doctorId,
        {
          firstName,
          lastName,
          gender,
          birthdate,
          contactNumber,
          specialization,
        },
        { new: true }
      ).populate("healthInstitution");

      if (!updatedDoctor) {
        return res
          .status(404)
          .json({ error: "Le médecin spécifié n'existe pas." });
      }

      res.status(200).json(updatedDoctor);
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour des détails du médecin :",
        error
      );
      res.status(500).json({
        error: "Erreur lors de la mise à jour des détails du médecin.",
      });
    }
  },

  // Route handler pour la récupération des patients d'un médecin
  getDoctorPatients: async (req, res) => {
    try {
      const { doctorId } = req.params;

      const doctor = await Doctor.findById(doctorId);
      if (!doctor) {
        return res
          .status(404)
          .json({ error: "Le médecin spécifié n'existe pas." });
      }

      const patients = await MedicalRecord.find({ doctor: doctorId }).populate(
        "patient"
      );

      res.status(200).json(patients);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des patients du médecin :",
        error
      );
      res.status(500).json({
        error: "Erreur lors de la récupération des patients du médecin.",
      });
    }
  },
};

module.exports = doctorsController;
