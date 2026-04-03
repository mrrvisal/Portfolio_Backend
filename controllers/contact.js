const contactService = require("../services/contact");

let getAll = async (req, res) => {
  try {
    console.log(req.body);
    
    let row = await contactService.getAll();
    // console.log("Get success");
    
    return res.json({
      result: true,
      msg: "Get successfully",
      data: row,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ 
        result: false,
        msg: error.message 
    });
  }
};
let create = async (req, res) => {
  try {
    let row = await contactService.create(req.body);
    // console.log("success");
    
    return res.json({
      result: true,
      msg: "Post successfully",
      data: row[0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ 
        result: false,
        msg: error.message 
    });
  }
};

module.exports = {
  getAll,
  create,
};
