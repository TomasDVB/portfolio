const express = require("express");
const server = express();
const port = 3001;

server.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

server.listen(port, () => {
  console.log("El servidor está corriendo en el puerto " + port + ".");
});
