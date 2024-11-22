const sql = require('mssql');

// Configuración de la conexión con SQL Server
const config = {
  user: 'sa',  
  password: '123',  
  server: 'localhost', 
  database: 'ecommerce_db',
  options: {
    encrypt: true, 
    trustServerCertificate: true, 
  },
};

// Función para conectarse a la base de datos
async function connect() {
  try {
    const pool = await sql.connect(config);
    console.log('Conectado a la base de datos');
    return pool;
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
}

module.exports = connect;
