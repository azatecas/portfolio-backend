const router = require('express').Router();
const nodemailer = require('nodemailer');


router.post("/", (req,res) => {
    console.log("BODYYYYYYYYYYYYYYY", req.body)
    const { name,email, subject, message } = req.body;
    
      // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PSWD, // generated ethereal password
        },
    });

    let mailOptions = {
        from:` "${name}" ${email}`,
        to:process.env.EMAIL,
        subject: subject,
        text:`name: ${name}, email: ${email}, message ${message}`
    }

      // send mail with defined transport object
    transporter.sendMail(mailOptions)
        .then(()=>{
            res.json({Email: "SENT SUCCESFULLY "});
        })
        .catch(err => {
            res.status(500).json({Error: "THREE WAS A PROBLEM SENDING YOUR MESSAGE, TRY AGAIN LATER"})
            console.log(err)
        })   
})


module.exports = router;