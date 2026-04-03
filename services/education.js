const educationModel = require("../models/education");

let getAll = async () => {
    let row = await educationModel.getAll();
    return row;
};

module.exports = {
  getAll,
};