const pool = require("../config/config");

let getAll = async () => {
  let sql =
    "select * from contacts";
  let [row] = await pool.query(sql);
  return row;
};
let create = async (body) => {
  let sql =
    "insert into contacts(name, email, subject, message) values (?,?,?,?)";
  let data = [body.name, body.email, body.subject, body.message];
  let [result] = await pool.query(sql, data);
  let [row] = await pool.query("select * from contacts where id = ?", [
    result.insertId,
  ]);
  return row;
};

module.exports = {
  getAll,
  create,
};
