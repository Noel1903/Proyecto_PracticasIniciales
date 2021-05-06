const {Router} = require("express")
const router = Router();
const juegocontroller = require('../controller/juegos.controller');
router.get('/consolas/juegos/:id_consola',juegocontroller.juegos)
module.exports =router;