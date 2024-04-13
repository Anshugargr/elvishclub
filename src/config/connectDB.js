import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'sql.freedb.tech',
    user: 'freedb_Aman7693',
    password: '3w?X$&XJg3gP56b',
    database: 'freedb_doublekamaii'
});

export default pool;