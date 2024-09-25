const express = require("express");
const router = express.Router();
const requireAuth = require('../middleware/requireAuth')
const {requestLogger} = require('../middleware/customMiddleware')

const {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
  // patchJob
} = require("../controllers/jobControllers");

router.use(requestLogger)

// GET /jobs
router.get("/", getAllJobs);

// require authentication for following routes
router.use(requireAuth)

// POST /jobs
router.post("/", createJob);

// GET /jobs/:jobId
router.get("/:jobId", getJobById);

// PUT /jobs/:jobId
router.put("/:jobId", updateJob);

// DELETE /jobs/:jobId
router.delete("/:jobId", deleteJob);

// Update car using PATCH 
// router.patch('/:jobId', patchJob)

module.exports = router;