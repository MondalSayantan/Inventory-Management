const express = require("express");
const inventoryController = require("../controllers/inventory.controller");

const router = express.Router();

router.get("/products", inventoryController.getProducts);
// router.get("/users", inventoryController.getUsers);
// router.get("/orders", inventoryController.getOrders);
// router.post("/products", inventoryController.addProducts);
// router.post("/users", inventoryController.addUsers);
// router.post("/orders", inventoryController.addOrders);
// router.put("/products", inventoryController.updateProducts);

module.exports = router;
