const {Router} = require("express")
const router = Router();
const usuariocontroller = require('../controller/usuario.controller');
router.get('/usuarios',usuariocontroller.usuarios)
router.get('/obtieneusuario/:id_usuario',usuariocontroller.obtieneusuarios)
router.post('/verificausuario',usuariocontroller.verificausuario)
router.post('/crearUsuario',usuariocontroller.crearUsuario)
module.exports =router;