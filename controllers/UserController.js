const express = require('express')
const router = express.Router();

const validateMiddleware = require("../middleware/Validate.js");
const userService = require("../services/UserService.js");

router.get("/",userService.getUserListing);

router.get("/:id",userService.getSingleUser);

router.post("/", validateMiddleware.validateUserForm, userService.addAUser);

router.put("/:id",userService.updateAUser);

router.delete("/:id",userService.deleteAUser);

module.exports=router;


