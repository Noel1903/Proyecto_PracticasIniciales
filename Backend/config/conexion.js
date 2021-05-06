const mysql=require('mysql');
const conexion=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'wertyuk',//Aqui se escribe su nombre de usuario de SQL
    port:3307,
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