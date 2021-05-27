const index = (req, res) =>{
    res.render("index", {
        title: "My Webstore"
    })
}
module.exports = {
    index,
}