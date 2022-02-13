import Client from "pg/lib/client";



const db = new Client({
    user: 'hanyu',
    password: '5555',
    host: 'localhost',
    database: 'todolist',
    port: 5432,
});

db.connect();

export default db;