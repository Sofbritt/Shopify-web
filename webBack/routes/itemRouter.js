const express = require("express");
const router = express.Router();
const controller = require("../controllers/itemControllers");
const { verifyToken } = require("../utils/verifyToken");

router.post('/', verifyToken, controller.itemCreate);
router.get("/getitem",controller.search);
router.post("/", controller.itemCreate);
router.get("/:id", controller.getOneItem);
router.get("/", controller.getItems);
router.post("/addbasket/:userId/:itemId", controller.addBasket);
router.get("/basket/:userId", controller.getBasket);
router.delete("/removeitem/:userId/:itemId", controller.removeItem);



module.exports = router;