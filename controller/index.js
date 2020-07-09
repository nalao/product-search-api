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
exports.add = (req, res) => {
  index.add(req, (error, data) => {
    res.json(data);
  });
};
exports.edit = (req, res) => {
  index.edit(req, (error, data) => {
    res.json(data);
  });
};
exports.sale = (req, res) => {
  index.sale(req, (error, data) => {
    res.json(data);
  });
};
exports.delete = (req, res) => {
  index.delete(req, (error, data) => {
    res.json(data);
  });
};
