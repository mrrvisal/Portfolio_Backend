const contactModel = require("../models/contact");
const { sendTelegramNotification } = require("../utils/telegram"); // 👈 add this

let create = async (body) => {
  let { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    const error = new Error("All fields are required");
    error.status = 400;
    throw error;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    const error = new Error("Invalid email format");
    error.status = 400;
    throw error;
  }

  if (message.length < 10) {
    const error = new Error("Message must be at least 10 characters");
    error.status = 400;
    throw error;
  }

  let row = await contactModel.create(body);

  // 👇 fire-and-forget, won't break submit if Telegram fails
  sendTelegramNotification(body).catch(console.error);

  return row;
};
