const app = require("../src/app");
app.listen(app.get("port"));
console.log("el servidor esta escuchando en el puerto "+app.get("port"))
