const express = require("express"),
router = express.Router(),
indexController = require("../controllers/index");


router.get("/", indexController.index)
router.get("/products", indexController.products)
router.get("/alejandro", indexController.alejandro)
router.post("/new-product", indexController.newProduct)
module.exports = router;