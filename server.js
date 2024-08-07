const nodemailer = require("nodemailer");

// u need to have 2 step verification on the email u are using for sending mail
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: "587",
  secure: false,
  auth: {
    user: "yourmail@gmail.com",
    pass: "Apppassword",
    // u can get this password by following this video https://forwardemail.net/en/guides/send-mail-as-gmail-custom-domain#legacy-free-guide
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <vicky@gmail.com>', // sender address
    to: "yourmail@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId, info.response);
}

main().catch(console.error);
