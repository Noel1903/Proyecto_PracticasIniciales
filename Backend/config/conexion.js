const mysql=require('mysql');
const conexion=mysql.createConnection({
    host: 'localhost',
    user:'ajacobo',
    password:'123456',//Aqui se escribe su nombre de usuario de SQL
    port:3306,
    database: 'db_datos'

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