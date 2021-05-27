const express = require("express"), path = require("path"),
app = express(); router = require("./routes/index.js"), bodyParser = require("body-parser");

//settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");
//middlewares
app.use((req,res,next)=>{
    console.log(`${req.url} ${req.method}`);
    next();
})
// app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: false}));
//routes
app.use(router);

//errors

//static files = archivos front-end

app.get(express.static(path.join(__dirname, "public")));

//start the server
app.listen(app.get("port"), _=>console.log(`server on port ${app.get("port")}`));