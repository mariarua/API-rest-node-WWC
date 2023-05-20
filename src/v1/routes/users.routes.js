const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.controllers");

router.get("/", usersController.getAllUsers);
router.post("/", usersController.createUser);

module.exports = router;
