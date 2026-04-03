const pool = require("../config/config");

let getAll = async () => {
  let sql = "select * from projects";
  let [row] = await pool.query(sql);
  return row;
};

module.exports = {
  getAll,
};
