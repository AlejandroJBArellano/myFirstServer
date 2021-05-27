const items = [
    {id: 1, name: `BMW Altima`},    
    {id: 2, name: `Chrysler Camry`},    
    {id: 3, name: `Audi Altima`},    
],
index = (req, res) =>{
    res.render("index", {
        title: "My Webstore"
    })
},
products = (req,res)=>res.render(`products`, {
    title: "List of Products",
    items: items
}),
alejandro = (req,res)=>res.render(`alejandro`, {title: "Alejandro Full Stack Developer"}),
newProduct = (req,res,next)=>{
    console.log(req.body);
    const { newItem } = req.body;
    console.log("false");
    items.push({
        id: items.length + 1,
        name: newItem
    });
    res.redirect("/products")
};
module.exports = {
    index, products, alejandro, newProduct
}