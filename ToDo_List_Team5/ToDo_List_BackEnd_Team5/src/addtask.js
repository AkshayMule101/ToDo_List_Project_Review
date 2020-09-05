const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "localhost",
  user: "root",
  password: "",
  database: "dac20",
};

let addnewtask = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql =
    "INSERT INTO newtask (Usertask) VALUES (?)";
  await connection.queryAsync(sql, [
    input.Usertask,

  ]);

  await connection.endAsync();
};



module.exports = { addnewtask };
