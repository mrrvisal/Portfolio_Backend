const educationService = require("../services/education");

let getAll = async (req, res) => {
  try {
    let row = await educationService.getAll();

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

module.exports = {
  getAll,
};
