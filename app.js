const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();  

const port = process.env.PORT || 3000;

require('dotenv').config();


const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});



app.use(cors());
app.use(bodyParser.json());

app.get('/todos', (req, res) => {
    pool.query('SELECT * FROM todos', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/todos', (req, res) => {
    const { task } = req.body;
    pool.query('INSERT INTO todos (task) VALUES (?)', [task], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Todo added successfully' });
    });
});

app.get('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  pool.query('SELECT * FROM todos WHERE id = ?', [id], (err, result) => {
      if (err) throw err;
      res.json( result );
  });

})


app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    pool.query('UPDATE todos SET completed = ? WHERE id = ?', [completed, id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Todo updated successfully' });
    });
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    pool.query('DELETE FROM todos WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Todo deleted successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});