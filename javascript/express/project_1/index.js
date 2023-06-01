//! This is the entry file for the application

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mysql = require('mysql2');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection  = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '@RSPass123',
    database : 'employeesdb'
});

app.use(express.json());

app.post('/create', (req, res) => {

    const { idemployees, name, surname, position } = req.body;

    const sql = `INSERT INTO employees (idemployees, name, surname, position) VALUES (?, ?, ?, ?)`;

    connection.query(sql, [idemployees, name, surname, position], (error, results) => {
        if (error) throw error;
        res.send({ message: 'User added successfully.' });
    });
});

app.get('/api/users', (req, res) => {
    const sql = 'SELECT * FROM employees';
    connection.query(sql, (error, results) => {
        if (error) {
            return res.status(500).send({ error });
        }
        res.send({ data: results });
    });
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM employees WHERE idemployees = ?';
    connection.query(sql, [id], (error, results) => {
        if (error) {
            return res.status(500).send({ error });
        }
        if (!results.length) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.send({ data: results[0] });
    });
});

app.put('/modify', (req, res) => {
    const { idemployees } = req.body;
    const {name, surname, position } = req.body;
    const sql = 'UPDATE employees SET name = ?, surname = ?, position = ? WHERE idemployees = ?';
    connection.query(sql, [name, surname, position, idemployees], (error, result) => {
        if (error) {
            return res.status(500).send({ error });
        }
        if (result.affectedRows === 0) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.send({ message: 'User updated successfully' });
    });
});

app.delete('/remove', (req, res) => {
    const { idemployees } = req.body;
    const sql = 'DELETE FROM employees WHERE idemployees = ?';
    connection.query(sql, [idemployees], (error, result) => {
        if (error) {
            return res.status(500).send({ error });
        }
        if (result.affectedRows === 0) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.send({ message: 'User deleted successfully' });
    });
});

// Serving html pages with my server
app.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname,'public', 'index.html'));
});

app.get('/create', (req, res) => {

    res.sendFile(path.join(__dirname,'public', 'createEmployee.html'));
});

app.get('/modify', (req, res) => {

    res.sendFile(path.join(__dirname,'public', 'modifyEmployee.html'));
});
app.get('/remove', (req, res) => {

    res.sendFile(path.join(__dirname,'public', 'removeEmployee.html'));
});


app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
});