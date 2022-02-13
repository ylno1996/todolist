import db from "./db";

const idDB = 'idinfos.ids';
const todolistDB = 'todolists.todos';

export function findID(id) {
    let result;
    db.query(`SELECT '${id}' FROM ${idDB};`, (err,res) => {
    if (!err) {
        result = res;
    }
    else {
        console.log(err);
        result = err;
    }
    return result;
})};

export function addID(id) {
    db.query(`INSERT INTO ${idDB} VALUES ('${id}');`, (err,res) => {
    if (!err) {
        console.log(res);
    }
    else console.log(err);
})};

export function addTodo(date, name, summary, body, priority) {
    db.query(`INSERT INTO ${todolistDB} (date, name, summary, body, priority) VALUES (${date},${name},${summary},${body},${priority});`, (err,res) => {
        if (!err) {
            console.log(res);
        }
        else console.log(err);
})};

