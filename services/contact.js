const contactModel = require('../models/contact')

let getAll = async () => {
    let row = await contactModel.getAll();
    return row;
};
let create = async (body) => {
    let { name, email, subject, message } = body;

    // 🔴 validation
    if (!name || !email || !subject || !message) {
      const error = new Error("All fields are required");
      error.status = 400;
      throw error;
    }

    // email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const error = new Error("Invalid email format");
      error.status = 400;
      throw error;
    }

    // optional: min length
    if (message.length < 10) {
      const error = new Error("Message must be at least 10 characters");
      error.status = 400;
      throw error;
    }

    let row = await contactModel.create(body);
    return row;
};

module.exports = {
  getAll,
    create,
};