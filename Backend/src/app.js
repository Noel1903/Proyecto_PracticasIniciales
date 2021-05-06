
const conexion = require('../config/conexion');
const express = require("express");
const bodyparse = require("body-parser");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
app.set("port",3000)
app.use(cors());
app.use(express.json({limit:'100mb'}))
app.use(express.urlencoded({limit: '100mb', extended: true}))
app.use(morgan('dev'))
app.use(require("./routes/usuario.routes"))
app.use(require("./routes/juegos.routes"))
app.use(require("./routes/consolas.routes"))
module.exports =app;