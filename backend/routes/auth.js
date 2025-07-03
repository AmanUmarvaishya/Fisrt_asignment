const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const { SignUp } = require("../controller/SignUp");
const GoogleLogin = require("../controller/GoogleLogin");
const { login } = require("../controller/Login");
// for validator with express-validator
const SingUpValidation = [
  body("name", "enter right name").isLength({ min: 3 }),
  body("email", "enter right email ").isLength({ min: 5 }),
  body("password", "password at least 6 charactors").isLength({ min: 6 }),
];

const LoginValidation = [
  body("email", "enter right email ").isLength({ min: 5 }),
  body("password", "password at least 6 charactors").isLength({ min: 6 }),
];

//create a user using post "api/auth" , Doesn't require auth
router.get("/google", GoogleLogin);
router.post("/createUser", SingUpValidation, SignUp);
router.post("/login", LoginValidation, login);

module.exports = router;
