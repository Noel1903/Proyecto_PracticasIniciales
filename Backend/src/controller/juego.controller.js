const conexion = require('../../config/conexion');
const juegocontroller = {};

juegocontroller.juegos = (req,res)=>{
    let sql = 'select * from tb_juegos'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
}

juegocontroller.obtenerjuego=(req,res)=>
{
    let sql=`select * from tb_juegos where id_juego =`+req.params.id_juego;
    conexion.query(sql,(err,rows,fields)=>{
        if (err) throw err
        else{
            res.json(rows)
        }
    })
}

juegocontroller.crearjuego=(req,res)=>{
    let sql='insert into tb_juegos(id_consola,nombre,descripcion,cartucho) values ('+req.body.id_consola+','+req.body.nombre+','+req.body.descripcion+','+req.body.cartucho+')'
    console.log(sql);
    conexion.query(sql,(err,rows,fields)=>{
        if (err) throw err
        
        else{
            
            return res.status(200).json(rows);
        }
    })
}

module.exports = juegocontroller;