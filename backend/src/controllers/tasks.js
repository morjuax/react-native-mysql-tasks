import { connect } from '../database'

export const getTasks = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM tasks;');
    res.json(rows);
}

export const getTaskCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT count(*) as count FROM tasks;');
    res.json(rows[0].count);
}

export const getTask = async (req, res) => {
    const { id } = req.params;
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM tasks where id = ?;', [id]);
    res.json(rows[0]);
}

export const saveTask = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query("INSERT INTO tasks (title, description) values (?,?)", [
        req.body.title,
        req.body.description
    ]);
    return res.json(
        {
            id: results.insertId,
            ...req.body
        }
    );
}

export const deletTask = async (req, res) => {
    const { id } = req.params;
    const connection = await connect();
    await connection.query('DELETE FROM tasks where id = ?;', [id]);
    res.sendStatus(204);
}

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const connection = await connect();
    const results = await connection.query('UPDATE tasks SET ? where id = ?;', [
        req.body,
        id
    ]);
    res.sendStatus(204)
}
