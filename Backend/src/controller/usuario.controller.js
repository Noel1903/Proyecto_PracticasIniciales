const conexion = require('../../config/conexion');
const usuariocontroller = {};


usuariocontroller.usuarios = (req,res)=>{
    let sql = 'select * from tb_users'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
}
usuariocontroller.obtieneusuarios=(req,res)=>
{
    let sql=`select * from tb_users where id_usuario =`+req.params.id_usuario;
    conexion.query(sql,(err,rows,fields)=>{
        if (err) throw err
        else{
            res.json(rows)
        }
    })
}
module.exports = usuariocontroller;