
const conexion = require('../config/conexion');
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.set("port",3000)
app.use(cors());
app.use(express.json({limit:'100mb'}))
app.use(express.urlencoded({limit: '100mb', extended: true}))
app.use(morgan('dev'))
app.use(require("./routes/usuario.routes"))
<<<<<<< HEAD
app.use(require("./routes/juegos.routes"))
app.use(require("./routes/consolas.routes"))
=======
app.use(require("./routes/juego.routes"))
>>>>>>> 697935714092f7d8f80fccc477f9d9b8f1637c0c
module.exports =app;