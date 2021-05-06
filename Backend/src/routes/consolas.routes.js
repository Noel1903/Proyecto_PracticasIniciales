const {Router} = require("express")
const router = Router();
const consolacontroller = require('../controller/consolas.controller');
router.get('/consolas',consolacontroller.consolas)
module.exports =router;