import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'bdl5wnnfehbxtn4e23x6-mysql.services.clever-cloud.com',
    user: 'ubdkarzqzcoraaxg',
    password: '9iUyFDj13Qga1FFfraGR',
    database: 'bdl5wnnfehbxtn4e23x6'
});

export default pool;
