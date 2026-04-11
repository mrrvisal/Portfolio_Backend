const pool = require("../config/config");

let getAll = async () => {
  let sql = "select * from projects";
  let [row] = await pool.query(sql);

  let count = "select count(*) as count from projects";
  let [countRow] = await pool.query(count);

  return { ...row, total: countRow[0].count };
};

module.exports = {
  getAll,
};
