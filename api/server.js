// SUNUCUYU BU DOSYAYA KURUN
// IMPORTS
const express = require("express");
const controller = require("./users/model");

// INSTANCE OF EXPRESS.JS
const server = express();

// GLOBAL MIDDLEWARE
server.use(express.json());

// API

// GET All Users
server.get("/api/users", (req, res) => {
  controller
    .find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        message: "Kullanıcı bilgileri alınamadı",
      });
    });
});

// CREATE User
server.post("/api/users", (req, res) => {
  // console.log(req.body);

  const { name, bio } = req.body;
  if (!name || !bio) {
    return res
      .status(400)
      .json({ message: "Lütfen kullanıcı için bir name ve bio sağlayın" });
  }
  controller
    .insert(req.body)
    .then((newUser) => {
      res.status(201).json({
        message: "Kullanıcı başarıyla oluşturuldu",
        data: newUser,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Veritabanına kaydedilirken bir hata oluştu" });
    });
});

server.get("/api/users/:id");
server.delete("/api/users/:id");
server.put("/api/users/:id");

// EXPORT
module.exports = server; // SERVERINIZI EXPORT EDİN {}
