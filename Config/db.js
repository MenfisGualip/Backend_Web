const mysql = require('mysql2');

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
  host: '127.0.0.1',     
  user: 'root',          
  password: '12345',     
  database: 'todolist',  
  port: 3306             
});

// Conectar a MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos con ID:', connection.threadId);
});

module.exports = connection;
