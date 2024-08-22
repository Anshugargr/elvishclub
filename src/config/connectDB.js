import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'be98hda9bshvgif0oayo-mysql.services.clever-cloud.com',
    user: 'uganrjh6pybthvgk',
    password: 'x3tYeWRYhQABIYwwutnv',
    database: 'be98hda9bshvgif0oayo'
});

export default pool;
