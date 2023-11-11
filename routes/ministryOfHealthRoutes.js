const express = require("express");
const router = express.Router();
const ministryOfHealthController = require("../controller/healthMinistryController ");

// Routes liées au ministère de la santé
router.post("/register", ministryOfHealthController.registerMinistryOfHealth);
router.get("/:ministryId", ministryOfHealthController.getMinistryDetails);
router.put("/:ministryId", ministryOfHealthController.updateMinistryDetails);
router.get(
  "/:ministryId/institutions",
  ministryOfHealthController.getMinistryInstitutions
);
router.get(
  "/:ministryId/analytics",
  ministryOfHealthController.getAnalyticsData
);

module.exports = router;
