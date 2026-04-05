const contactService = require("../services/contact");

let getAll = async (req, res) => {
  try {
    let row = await contactService.getAll();

    return res.json({
      result: true,
      msg: "Get successfully",
      data: row,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: false,
      msg: error.message,
    });
  }
};
let create = async (req, res) => {
  try {
    let row = await contactService.create(req.body);

    return res.json({
      result: true,
      msg: "Post successfully",
      data: row[0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: false,
      msg: error.message,
    });
  }
};

module.exports = {
  getAll,
  create,
};
