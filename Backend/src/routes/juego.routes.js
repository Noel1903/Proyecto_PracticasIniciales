const {Router} = require("express")
const router = Router();
const juegocontroller = require('../controller/juego.controller');
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
router.get('/juegos',authenticateJWT,juegocontroller.juegos)

router.post('/crearjuego',juegocontroller.crearjuego)
router.get('/obtenerjuego/:id_juego',juegocontroller.obtenerjuego)
router.put('/modificarjuego/:id_juego',juegocontroller.modificarjuego)
router.delete('/eliminarjuego/:id_juego',juegocontroller.eliminarjuego)
module.exports =router;