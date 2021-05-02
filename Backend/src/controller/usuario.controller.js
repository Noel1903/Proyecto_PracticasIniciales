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

usuariocontroller.verificausuario=(req,res)=>{

    
    let sql="select count(*) usuario from tb_users where username='"+ req.body.usuername+"' and contraseña='"+req.body.contraseña+"'";
   
    console.log(sql);
 conexion.query(sql,(err,rows,fields)=>{
        if (err) throw err
        
        else{
            
            return res.status(200).json(rows);
        }
    })
}

usuariocontroller.crearUsuario=(req,res)=>{

    let sql=`insert into tb_users(nombre,apellido,username,correo,contraseña,biografia,fecha) values ('${req.body.nombre}','${req.body.apellido}','${req.body.username}','${req.body.correo}','${req.body.contraseña}','${req.body.biografia}','${req.body.fecha}')`;
    console.log(sql);
    conexion.query(sql,(err,rows,fields)=>{
            if (err) throw err          
            else{
                
                return res.status(200).json(rows);
            }
        })
    }

module.exports = usuariocontroller;