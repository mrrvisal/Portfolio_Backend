const projectService = require("../services/project");

let getAll = async (req, res) => {
  try {
    let row = await projectService.getAll();
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
      msg: error.message,
    });
  }
};

module.exports = {
  getAll,
};
