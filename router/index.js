/* Load Modules */
const express = require("express");
const router = express.Router();
const controller = require("../controller/index");

router.get("/all", controller.all);
router.get("/get-by-id/:id", controller.getById);
router.post("/add", controller.all);
router.put("/edit/:id", controller.getById);
router.delete("/delete/:id", controller.getById);

module.exports = router;
