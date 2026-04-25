const sendTelegramNotification = async ({ name, email, subject, message }) => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  console.log("🔍 Token:", token ? "exists" : "MISSING");
  console.log("🔍 Chat ID:", chatId);

  if (!token || !chatId) {
    console.log("❌ Missing token or chatId");
    return;
  }

  const text = `
📬 *New Contact Message*
👤 *Name:* ${name}
📧 *Email:* ${email}
📌 *Subject:* ${subject}
💬 *Message:*
${message}
  `.trim();

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
    }),
  });

  const result = await res.json(); // 👈 log Telegram's response
  console.log("📨 Telegram response:", result);
};

module.exports = { sendTelegramNotification };
