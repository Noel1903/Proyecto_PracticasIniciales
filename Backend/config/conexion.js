const mysql=require('mysql');
const conexion=mysql.createConnection({
    host: 'localhost',
    user:'root',
<<<<<<< HEAD
    password:'Noel19Ch@con',//Aqui se escribe su nombre de usuario de SQL
    port:3306,
=======
    password:'Noel19Ch@con',//Aqui se escribe su nombre de usuario de SQL
    port:3306,
>>>>>>> 697935714092f7d8f80fccc477f9d9b8f1637c0c
    database: 'db_datos001'

});
conexion.connect((err)=>{
    if(err){
        console.log("Error de conexión "+ err)
    }
    else{
        console.log("Base de datos se conectó")
    }
})

module.exports=conexion