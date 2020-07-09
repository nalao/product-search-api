const db = require("../config/conn");

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
          "INSERT INTO product (pro_id, name, price, price_send, qty, ccy) VALUES ('" +
            req.body.pro_id +
            "','" +
            req.body.name +
            "','" +
            req.body.price +
            "','" +
            req.body.price_send +
            "','" +
            req.body.qty +
            "','" +
            req.body.ccy +
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
    "UPDATE product SET name = '" +
      req.body.name +
      "', price = '" +
      req.body.price +
      "', price_send = '" +
      req.body.price_send +
      "', qty = '" +
      req.body.qty +
      "', ccy = '" +
      req.body.ccy +
      "' WHERE pro_id = " +
      req.body.pro_id,
    function (error, results, fields) {
      if (error) throw error;
      res(null, { status: true, msg: "ແກ້ໄຂຂໍ້ມູນສຳເລັດແລ້ວ" });
    }
  );
};

index.sale = (req, res) => {
  db.query(
    "SELECT COUNT(*) as total, qty FROM product WHERE pro_id = '" +
      req.body.pro_id +
      "'",
    function (error, results, fields) {
      if (error) throw error;
      if (results[0].total > 0) {
        if (results[0].qty >= req.body.qty) {
          const totalQty = results[0].qty - req.body.qty;
          db.query(
            "UPDATE product SET qty = '" +
              totalQty +
              "' WHERE pro_id = " +
              req.body.pro_id,
            function (error, results, fields) {
              if (error) throw error;
              res(null, { status: true, msg: "ການດຳເນີນການສຳເລັດແລ້ວ" });
            }
          );
        } else {
          res(null, {
            status: false,
            msg: "ຈຳນວນສິນຄ້າບໍ່ພໍຂາຍ",
          });
        }
      } else {
        res(null, {
          status: false,
          msg: "ບໍ່ສາມາດກຳເນີນການໄດ້, ໄອດີນີ້ບໍ່ມີໃນລະບົບແລ້ວ",
        });
      }
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
