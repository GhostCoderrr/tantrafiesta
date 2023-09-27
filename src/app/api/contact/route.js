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

  const mailData = {
    from: "tantrafiestadummymailer@gmail.com",
    to: "jayvardhanpatil7811@gmail.com",
    subject: `TantraFiesta Query Form: Query From ${name}`,
    text: message + " | Sent from: " + email,
    html: `<div>${message}</div><p>Sent from:
    ${email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  return new Response({ status: 200 });
};
