const express = require("express"),
router = express.Router(),
items = [
    {id: 1, name: `BMW Altima`},    
    {id: 2, name: `Chrysler Camry`},    
    {id: 3, name: `Audi Altima`},    
], indexController = require("../controllers/index");

router.get("/", (req,res)=>{
    res.render(`index`, {
        title: "MyWebstore",
    })
})
router.get("/products", (req,res)=>res.render(`products`, {
    title: "List of Products",
    items: items
}))
router.get("/alejandro", (req,res)=>res.render(`alejandro`, {
    title: "Alejandro Full Stack Developer"
}))
router.post("/new-product", (req,res,next)=>{
    console.log(req.body);
    const { newItem } = req.body
    items.push({
        id: items.length + 1,
        name: newItem
    });
    res.redirect("/products")
})
module.exports = router;