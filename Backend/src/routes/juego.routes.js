const {Router} = require("express")
const router = Router();
const juegocontroller = require('../controller/juego.controller');
router.get('/juegos',juegocontroller.juegos)
router.post('/crearjuego',juegocontroller.crearjuego)
router.get('/obtenerjuego/:id_juego',juegocontroller.obtenerjuego)
router.put('/modificarjuego/:id_juego',juegocontroller.modificarjuego)
router.delete('/eliminarjuego/:id_juego',juegocontroller.eliminarjuego)
module.exports =router;