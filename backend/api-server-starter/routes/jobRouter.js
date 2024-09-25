const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
  // patchJob
} = require("../controllers/jobControllers");

// GET /jobs
router.get("/", getAllJobs);

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