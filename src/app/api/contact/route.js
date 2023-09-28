export const POST = async (req) => {
  const { name, email, message } = await req.json();
  let nodemailer = require("nodemailer");
  require("dotenv").config();
  const PASSWORD = process.env.password;
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "tantrafiestadummymailer@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });
  const mailData = {
    from: "tantrafiestadummymailer@gmail.com",
    to: "tantrafiesta@iiitn.ac.in",
    subject: `TantraFiesta Query Form: Query From ${name}`,
    text: message + " | Sent from: " + email,
    html: `<div>${message}</div><p>Sent from:
    ${email}</p>`,
  };
  // transporter.sendMail(mailData, function (err, info) {
  //   if (err) console.log(err);
  //   else console.log(info);
  // });
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  return new Response({ status: 200 });
};
