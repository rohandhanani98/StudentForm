const mysql = require("mysql2/promise");
// const config = require("../config.json");

async function query(sql, params) {
  // console.log("configconfig",config)
  const connection = await mysql.createConnection(
    {
      "host": "sql213.epizy.com",
      "user": "epiz_33912080",
      "password": "lgUJNBgRwXCJhPV",
      "database": "epiz_33912080_rohanUser"
    }
  );
  const [results] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query,
};

