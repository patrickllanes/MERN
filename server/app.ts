import express = require("express");
import path = require("path");
import bodyParser = require("body-parser");
import routes = require("./routes/index");
let app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../server/views"));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, "dist")));

// Set routes
app.use("", routes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

export = app;
