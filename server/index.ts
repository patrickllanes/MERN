import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as http from "http"

var app = express();

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", {
      title: "FUCK YOU"
    });
});

app.get("/users", (req, res) => {
  res.render("users", {
    title: "USERS FUCK YOU"
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
