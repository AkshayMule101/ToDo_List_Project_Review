let Promise = require("bluebird");
let mysql = require("mysql");

const DB_CONFIG = {
  host: "localhost",
  user: "root",
  password: "",
  database: "dac20",
};

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let forgetPass = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  sql = "UPDATE user SET password = ? where email = ? ";
  let result = await connection.queryAsync(sql, [input.password, input.email]);

  await connection.endAsync();
  // return result;
};

module.exports = { forgetPass };
