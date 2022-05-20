const express = require("express");
const inventoryRoute = require("./inventory.routes");
const router = express.Router();

router.use("/inventory", inventoryRoute);

module.exports = router;
