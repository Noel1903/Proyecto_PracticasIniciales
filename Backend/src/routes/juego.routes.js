const {Router} = require("express")
const router = Router();
const juegocontroller = require('../controller/juego.controller');
router.get('/juegos',juegocontroller.juegos)
router.get('/obtenerjuego/:id_juego',juegocontroller.obtenerjuego)
module.exports =router;