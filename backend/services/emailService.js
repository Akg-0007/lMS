
const nodemailer = require("nodemailer");


const sendMail = async (token, user) => {
    const transporter = await nodemailer.createTransport({
        service: "gmail",
        host : "smtp.gmail.com",
        secure : false ,
        port : 587,
        auth: {
          user: process.env.EME, // your email address
          pass: process.env.EMP // your email account password
        },
      });

      const mailOptions = {
        from: process.env.EME,
        to: user.email,
        subject: "Password Reset VP account",
        text: `Hello ! ${user.userId} your password has to be rest , follow this link ${process.env.FRONT_DEV||'http://localhost:3000/'}accounts/password/new/?token=${token}&&userId=${user.userId}`,
      };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          throw Error("B:-Failed to send mail")
        } else {
          return info.response
        }
      });
}

module.exports = {
    sendMail
}