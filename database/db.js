const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventario_db',
});


connection.connect((error)=>{
    if(error){
        console.log('Error de conexion DB es : '+error);
        return;
    }
    console.log('¡Conexion exitosa a DB!');
});
module.exports= connection;
