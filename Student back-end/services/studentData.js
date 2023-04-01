const db = require("./db");
const helper = require("../helper");
const config = require("../config.json");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name FROM Students LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(student) {
  const result = await db.query(
    `INSERT INTO Students 
    (name, email, mobile, password, age, gender, dateOfBirth) 
    VALUES 
    ("${student.name}", ${student.email}, ${student.mobile}, ${student.password}, ${student.age}, ${student.gender}, ${student.dateOfBirth})`
  );

  let message = "Error in creating student";

  if (result.affectedRows) {
    message = "Student created successfully";
  }

  return { message };
}

async function update(id, student) {
  const result = await db.query(
    `UPDATE Students 
    SET name="${student.name}", email=${student.email}, mobile=${student.mobile}, 
    password=${student.password}, age=${student.age} 
    WHERE id=${id}`
  );

  let message = "Error in updating student";

  if (result.affectedRows) {
    message = "Student updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM Students WHERE id=${id}`
  );

  let message = "Error in deleting Student";

  if (result.affectedRows) {
    message = "Student deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
