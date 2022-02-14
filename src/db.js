import Client from "pg/lib/client";



const db = new Client({
    user: 'todo',
    password: 'test5555',
    host: 'localhost',
    database: 'todolist',
    port: 5432,
});

db.connect();

export default db;