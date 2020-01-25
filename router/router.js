let express = require('express')
const nodemailer = require("nodemailer");

let Router = express.Router()
Router.get("/home", async(req, res) => {
    res.send({
        message: "It home Get Request"
    })
    var transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'your email',
          pass: 'your pass worf'
        }
          // go to this link and press on
        // https://myaccount.google.com/lesssecureapps?pli=1    
      });
      
      var mailOptions = {
        from: 'kamaluldin1999@gmail.com',
        to: 'kamalloungani11@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
     await transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    
        
})

module.exports = Router