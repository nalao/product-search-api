const db = require("../config/conn");
const e = require("express");

const index = () => {};

index.all = (req, res) => {
  db.query("SELECT *  FROM product", function (error, results, fields) {
    if (error) throw error;
    res(null, results);
  });
};
index.getById = (req, res) => {
  db.query(
    "SELECT * FROM product WHERE pro_id = '" + req.params.id + "'",
    function (error, results, fields) {
      if (error) throw error;
      res(null, results);
    }
  );
};

index.add = (req, res) => {
  db.query(
    "SELECT COUNT(*) as total FROM product WHERE pro_id = '" +
      req.body.pro_id +
      "'",
    function (error, results, fields) {
      if (error) throw error;
      if (results[0].total == 0) {
        db.query(
          "INSERT INTO product (pro_id, name, price) VALUES ('" +
            req.body.pro_id +
            "','" +
            req.body.name +
            "','" +
            req.body.price +
            "')",
          function (error, results, fields) {
            if (error) throw error;
            res(null, { status: true, msg: "ເພີ່ມຂໍ້ມູນສຳເລັດແລ້ວ" });
          }
        );
      } else {
        res(null, {
          status: false,
          msg: "ບໍ່ສາມາດເພີ່ມຂໍ້ມູນໄດ້, ໄອດີນີ້ມີໃນລະບົບແລ້ວ",
        });
      }
    }
  );
};

index.edit = (req, res) => {
  db.query(
    "UPDATE product SET pro_id = '" +
      req.body.pro_id +
      "', name = '" +
      req.body.name +
      "', price = '" +
      req.body.price +
      "' WHERE id = " +
      req.params.id,
    function (error, results, fields) {
      if (error) throw error;
      res(null, { status: true, msg: "ແກ້ໄຂຂໍ້ມູນສຳເລັດແລ້ວ" });
    }
  );
};

index.delete = (req, res) => {
  db.query("DELETE FROM product WHERE id = " + req.params.id, function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res(null, { status: true, msg: "ລົບຂໍ້ມູນສຳເລັດແລ້ວ" });
  });
};

module.exports = index;
