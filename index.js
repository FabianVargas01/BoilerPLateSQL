const express = require("express"); //importamos express desde node_modules
const server = express(); // lo invocamos y lo guardamos en una variable
const port = 3000;

//EJEMPLO DE RUTA GET AL ENDPOINT /
server.get("/ejemplo", (req, res) => {
  res.send("Hello World!");
});

// //RUTAS Y ENDPOINT
// server.get("/ejemplo", (req, res) => {
//   res.send("Estoy en la ruta de ejemplo");
// });

//RUTAS Y ENDPOINT
server.get("/alumnos", (req, res) => {
  res.send("Hello alumnos");
});

//RUTAS Y ENDPOINT
server.get("/senseis", (req, res) => {
  res.send("Hello senseis");
});

//levanta el servidor
server.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}`);
});
