const router = require("express").Router();

// User Controller
const { enroll } = require("../controllers/user");

// Enroll in yoga classes
router.route("/enroll").post(enroll);

module.exports = router;
