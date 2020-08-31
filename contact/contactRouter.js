const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  const { name, email, subject, message } = req.body;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PSWD, // generated ethereal password
    },
  });

  let mailOptions = {
    from: ` "${name}" ${email}`,
    to: process.env.EMAIL,
    subject: subject,
    html: `<h3 style="color:blue;">Name: ${name}</h3> 
    <h3>Subject: ${subject}</h3>
    <h3>Email: ${email}</h3>
    <p>Message: ${message}</p>`,
  };

  // send mail with defined transport object
  transporter
    .sendMail(mailOptions)
    .then(() => {
      res.json({ Email: "SENT SUCCESFULLY " });
    })
    .catch((err) => {
      res.status(500).json({
        Error: "THREE WAS A PROBLEM SENDING YOUR MESSAGE, TRY AGAIN LATER",
      });
      console.log(err);
    });
});

module.exports = router;
