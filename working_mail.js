const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: "587",
  secure: false,
  auth: {
    user: "staystrong1176@gmail.com",
    pass: "yxijizmumkirarpx",
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <vicky@gmail.com>', // sender address
    to: "icansleepforhours@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId, info.response);
}

main().catch(console.error);
