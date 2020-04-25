require('dotenv').config();
const nodemailer = require('nodemailer');

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      // user: 'fromscratch.derien@gmail.com',
      // pass: 'Lepi@n33doujeviens'
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  let mailOptions = {
    from: "sender@server.com",
    to: 'fromscratch.derien@gmail.com',
    subject: 'Coucou',
    text: 'yo man !'
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log('Error occurs', err);
    } else {
      console.log('Email sent !', data);
    }
  });