const sql = require('mssql')

const sqlConfig = {
    user: 'sa',
    password: 'Password1',
    database: 'puntosBorgWarnerRam',
    server: 'l10.42.6.29',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: false // change to true for local dev / self-signed certs
    }
  }

function getConnection(){
    return sqlConfig;
}

module.exports = { getConnection }