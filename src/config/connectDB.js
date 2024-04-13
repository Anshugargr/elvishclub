import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'sql.freedb.tech',
    user: 'freedb_elvishclub',
    password: 'puV4$K%5CwEaHxz',
    database: 'freedb_elvishclub'
});

export default pool;