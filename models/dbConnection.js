var mysql = require('mysql');

var connection = mysql.createPool({
    /*local*
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practicacarrito',
    /**/

    /*remote*/
    host: '23.229.186.194',
    user: 'electtro_admin',
    password: 'electtro_ADM2018',
    database: 'i2198482_Electtro2018',
    /**/
    insecureAuth: true
});

module.exports = connection;