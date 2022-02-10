const { Pool, Client} =require('pg');

const pool = new Pool();


const client = new Client({
    user: "postgres",
    host: "postgres",
    database: "postgres",
    password: "5555",
    port: 5432,
});


client.connect();

console.log("되는건가?");

    client.end();
