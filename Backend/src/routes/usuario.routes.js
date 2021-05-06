const {Router} = require("express")
const router = Router();
const usuariocontroller = require('../controller/usuario.controller');
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';
const refreshTokenSecret = 'somerandomstringforrefreshtoken';
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
router.get('/usuarios',authenticateJWT,usuariocontroller.usuarios)
router.get('/obtieneusuario/:id_usuario',authenticateJWT,usuariocontroller.obtieneusuarios)
router.post('/verificausuario',usuariocontroller.verificausuario)
router.post('/crearUsuario',usuariocontroller.crearUsuario)
router.post('/token',usuariocontroller.tocken)
router.post('/logout',usuariocontroller.logout)
router.delete('/eliminausuario',authenticateJWT,usuariocontroller.eliminausuario)
module.exports =router;