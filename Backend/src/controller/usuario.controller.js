const conexion = require('../../config/conexion');
const usuariocontroller = {};

const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';
const refreshTokenSecret = 'somerandomstringforrefreshtoken';
const refreshTokens = [];
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
    var acceso,usuario,correo,roll,id_usuario ;
    let sql="select count(*) acceso ,username,correo,roll,id_usuario  from tb_users where username='"+ req.body.usuername+"' and contraseña='"+req.body.contraseña+"'";
 conexion.query(sql,(err,rows,fields)=>{
        if (err) throw err
        else{
            
             // generate an access token
             rows.forEach(element => {
                 acceso=element.acceso;
                 usuario=element.username;
                 correo=element.correo;
                 roll=element.roll;
                 id_usuario =element.id_usuario 
             });
             
        

           
            if(acceso==1){
                const accessToken = jwt.sign({ username: usuario, correo: correo,roll:roll,id_usuario  }, accessTokenSecret, { expiresIn: '30m' });
                const refreshToken = jwt.sign({ username: usuario, correo: correo,roll:roll,id_usuario  }, refreshTokenSecret);
                refreshTokens.push(refreshToken);
                return res.status(200).json({
                    accessToken,
                    refreshToken
                });
             }else{
                res.send('Username or password incorrect');
             }  
        }
    })
}
usuariocontroller.crearUsuario=(req,res)=>{


    //res.json({text:"Creando usuario"})
    let sql=`insert into tb_users(nombre,apellido,username,correo,contraseña,biografia,fecha,roll) values ('${req.body.nombre}','${req.body.apellido}','${req.body.username}','${req.body.correo}','${req.body.contraseña}','${req.body.biografia}',${req.body.fecha},'${req.body.roll}')`;

    //let sql=`insert into tb_users(nombre,apellido,username,correo,contraseña,biografia,fecha) values ('${req.body.nombre}','${req.body.apellido}','${req.body.username}','${req.body.correo}','${req.body.contraseña}','${req.body.biografia}','${req.body.fecha}')`;

    console.log(sql);
    conexion.query(sql,(err,rows,fields)=>{
            if (err)
               
            res.status(500).json(err);          
            else{
                
                return res.json("Usuario Creado Con exito");
            }
        })
}
usuariocontroller.tocken=(req,res)=>{
    const { token } = req.body;

    if (!token) {
        return res.sendStatus(401);
    }

    if (!refreshTokens.includes(token)) {
        return res.sendStatus(403);
    }

    jwt.verify(token, refreshTokenSecret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });

        res.json({
            accessToken
        });
    });
}
usuariocontroller.logout=(req,res)=>{
    const { token } = req.body;
    refreshTokens = refreshTokens.filter(token => t !== token);

    res.send("Logout successful");
}
usuariocontroller.eliminausuario=(req,res)=>{
   
    //res.json({text:"Creando usuario"})
    let sql=`delete from tb_users where id_usuario =${req.body.id_usuario}`;

    //let sql=`insert into tb_users(nombre,apellido,username,correo,contraseña,biografia,fecha) values ('${req.body.nombre}','${req.body.apellido}','${req.body.username}','${req.body.correo}','${req.body.contraseña}','${req.body.biografia}','${req.body.fecha}')`;

    console.log(sql);
    conexion.query(sql,(err,rows,fields)=>{
            if (err)
               
            res.status(500).json(err);          
            else{
                let sql = 'select * from tb_users'
                conexion.query(sql,(err,rows,fields)=>{
                    if(err) throw err;
                    else{
                        res.json(rows)
                    }
                })
                
            }
        }) 
}
module.exports = usuariocontroller;