const contactService = require("../services/contact");

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
  create,
};
