const db = require("../config/conn");

const index = () => {};

index.all = (req, res) => {
  db.query("SELECT *  FROM product", function (error, results, fields) {
    if (error) throw error;
    console.table(results);
    res(null, results);
  });
};
index.getById = (req, res) => {
  res(null, { name: req.params.id });
};

module.exports = index;
