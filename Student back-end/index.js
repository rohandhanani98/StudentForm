const express = require("express");
const app = express();
const port = 3000;
const student = require("./routes/student");
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'sql213.epizy.com',
  user: 'epiz_33912080',
  password: 'lgUJNBgRwXCJhPV',
  database: 'epiz_33912080_rohanUser'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/student", student);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
