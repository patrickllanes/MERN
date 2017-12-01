import express = require("express");
import path = require("path");
let router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "FUCK YOU"
  });
});

router.get("/users", (req, res) => {
    res.render("users", {
      title: "USERS FUCK YOU"
    });
});

router.get("/test", (req, res) => {
    res.sendFile("test.html", {root: path.join(__dirname, "../../server/views/")});
});

export = router;
