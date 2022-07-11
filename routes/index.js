var express = require("express");
var router = express.Router();

const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form", { heading: "New Message" });
});

router.post("/new", (req, res, next) => {
  req.body;
  messages.push({ text: Message, user: Author, added: new Date() });
  res.redirect("/");
});

module.exports = router;
