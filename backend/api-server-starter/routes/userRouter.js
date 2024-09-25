const express = require("express");
const router = express.Router();
const {requestLogger} = require('../middleware/customMiddleware')

const { loginUser, signupUser } = require("../controllers/userControllers");
  
router.use(requestLogger)

// login route
router.post("/login", loginUser);
  
// signup route
router.post("/signup", signupUser);
  
module.exports = router;