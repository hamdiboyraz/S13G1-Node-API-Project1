// SUNUCUYU BU DOSYAYA KURUN
// IMPORTS
const express = require("express");
const controller = require("./users/model");

// INSTANCE OF EXPRESS.JS
const server = express();

// GLOBAL MIDDLEWARE
server.use(express.json());

// API
server.get("/api/users", (req, res) => {
  console.log("hi");
  console.log(controller.find());
  controller.find().then((users) => {
    res.json(users);
  }).catch(err => {
    console.error(err);
    res.status(500).json({
        message: "Kullanıcı bilgileri alınamadı"
    });
  });
});

// EXPORT
module.exports = server; // SERVERINIZI EXPORT EDİN {}
