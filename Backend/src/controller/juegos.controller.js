const conexion = require('../../config/conexion');
const juegocontroller = {};


juegocontroller.juegos = (req,res)=>{
    let sql='select * from tb_juegos where id_consola ='+req.params.id_consola;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
}

module.exports = juegocontroller;