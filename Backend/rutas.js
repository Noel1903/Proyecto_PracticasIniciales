const rutas = require('express').Router();
const conexion = require('./config/conexion');

//asignando rutas
//obtener usuarios
rutas.get('/viewUsers',(req,res)=>{
    let sql = 'select * from tb_users'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});

//obtener usuario
rutas.get('/viewUser/:id_usuario',(req,res)=>{
    const{id_usuario}=req.params
    let sql=`select * from tb_users where id_usuario = ?`
    conexion.query(sql,(err,rows,fields)=>{
        if (err) throw err
        else{
            res.json(rows)
        }
    })
});
//guardar usuario
rutas.post('/newUser',(req,res)=>{
    const{username,nombre,apellido,fecha,correo,contraseña,biografia}=req.body
    let sql=`insert into tb_users(nombre,apellido,username,correo,contraseña,biografia,fecha) values ('${nombre}','${apellido}','${username}','${correo}','${contraseña}','${biografia}',${fecha});`
    conexion.query(sql,(err,rows,fields)=>{
        if (err) throw err
        else{
            res.json({status:'Usuario agregado'})
        }
    })
});
//modificar usuario
rutas.put('/updateUser/:id_usuario',(req,res)=>{
    const{id_usuario}=req.params
    const{username,nombre,apellido,fecha,correo,contraseña,biografia}=req.body
    let sql = `update tb_users set 
                nombre='${nombre}',
                apellido='${apellido}',
                username='${username}',
                correo='${correo}',
                contraseña='${contraseña}',
                biografia='${biografia}',
                fecha='${fecha}'
                where id_users = '${id_usuario}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status:"Usuario modificado"})
        }
    })
})

//eliminar usuario
rutas.delete('/:id_usuario',(req,res)=>{
    const{id_usuario}=req.params

    let sql=`delete from tb_users where id_usuario = '${id_usuario}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status:"Usuario eliminado"})
        }
    })
});

module.exports = rutas