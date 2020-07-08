/* Load Modules */
const express = require("express");
const router = express.Router();
const controller = require("../controller/index");

router.get("/all", controller.all);
router.get(["/get-by-id", "/get-by-id/:id"], controller.getById);
router.post("/add", controller.add);
router.put("/edit/:id", controller.edit);
router.delete("/delete/:id", controller.delete);

module.exports = router;