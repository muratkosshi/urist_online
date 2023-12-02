const nodemailer = require("nodemailer");

// Настройте транспорт для SMTP-сервера
const transporter = nodemailer.createTransport({
    host: "murat.kosshi@gmail.com",
    port: 465,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "username",
      pass: "password",
    },
});

// Определите функцию для отправки письма
function sendEmail(name, email, message) {
  const mailOptions = {
    from: "ваш_email@gmail.com",
    to: "получатель@example.com", // Адрес получателя
    subject: "Новая заявка с вашего сайта",
    text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Ошибка отправки письма: " + error);
    } else {
      console.log("Письмо успешно отправлено: " + info.response);
    }
  });
}

module.exports = sendEmail;
