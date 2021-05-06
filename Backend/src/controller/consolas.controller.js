const conexion = require('../../config/conexion');
const consolacontroller = {};


consolacontroller.consolas = (req,res)=>{
    let sql = 'select * from tb_consola'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
}

module.exports = consolacontroller;