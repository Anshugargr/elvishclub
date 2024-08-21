import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'bbdazsrkbxuko0ucenjj-mysql.services.clever-cloud.com',
    user: 'uo5pncfkntbrqpp1',
    password: 'vaFUw4icGlRCANYivBIq',
    database: 'bbdazsrkbxuko0ucenjj'
});

export default pool;
