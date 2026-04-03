const projectModel = require('../models/project')

let getAll = async () => {
    let row = await projectModel.getAll();
    return row;
};

module.exports = {
  getAll,
};