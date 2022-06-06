const sql = require('mssql')

const sqlConfig = {
    user: 'sa',
    password: 'Password1',
    database: 'puntosBorgWarnerRam',
    server: '10.42.6.29',
    /* pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    }, */
    options: {
      encrypt: false, // for azure
      trustServerCertificate: false, // change to true for local dev / self-signed certs
      trustedconnection: true,
    }
  }

function getConnection(){
  try {
    return sql.connect(sqlConfig);
  } catch (error) {
    console.log(error)
  }

};

setTimeout(async() => {
  const conn = await getConnection();
  const resultado = await conn.request().query('SELECT * from usuarios');
  console.log(resultado);
}, 1500);

module.exports = { getConnection }