const express = require("express");
const router = express.Router();

const { loginUser, signupUser } = require("../controllers/userControllers");
const { requestLogger, errorHandler } = require('../middleware/customMiddleware');

router.use(requestLogger)
router.use(errorHandler)

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

module.exports = router;