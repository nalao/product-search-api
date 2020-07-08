const index = require("../model/index");

exports.all = (req, res) => {
  index.all(req, (error, data) => {
    res.json(data);
  });
};
exports.getById = (req, res) => {
  index.getById(req, (error, data) => {
    res.json(data);
  });
};
