import express, { json } from "express";
import { createConnection } from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

const db = createConnection({
  host: "localhost",
  user: "root",
  password: "password", // Replace with your MySQL password
  database: "todo_app",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  db.query("INSERT INTO tasks (task) VALUES (?)", [task], (err) => {
    if (err) throw err;
    res.send("Task added!");
  });
});

app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM tasks WHERE id = ?", [id], (err) => {
    if (err) throw err;
    res.send("Task deleted!");
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
