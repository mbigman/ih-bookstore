const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const rp = require('request-promise');

//google account credentials used to send email
const mailTransport = nodemailer.createTransport(
    `smtps://user@domain.com:password@smtp.gmail.com`);

exports.sendEmailCF = functions.https.onRequest((req, res) => {

  //recaptcha validation
  rp({
        uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
        method: 'POST',
        formData: {
            secret: 'your_secret_key',
            response: req.body['g-recaptcha-response']
        },
        json: true
    }).then(result => {
        if (result.success) {
            sendEmail('recipient@gmail.com', req.body).then(()=> { 
              res.status(200).send(true);
            });
        }
        else {
            res.status(500).send("Recaptcha failed.")
        }
    }).catch(reason => {
        res.status(500).send("Recaptcha req failed.")
    })

});

// Send email function
function sendEmail(email, body) {
  const mailOptions = {
    from: `<noreply@domain.com>`,
    to: ${data.seller}
  };
  // hmtl message constructions
  mailOptions.subject = 'contact form message';
  mailOptions.html = `<p><b>Name: </b>${body.rsName}</p>
                      <p><b>Email: </b>${body.rsEmail}</p>
                      <p><b>Subject: </b>${body.rsSubject}</p>
                      <p><b>Message: </b>${body.rsMessage}</p>`;
  return mailTransport.sendMail(mailOptions);
}

// const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const rp = require('request-promise');

//google account credentials used to send email
const mailTransport = nodemailer.createTransport(
    `smtps://user@domain.com:password@smtp.gmail.com`);

exports.sendEmailCF = functions.https.onRequest((req, res) => {

  //recaptcha validation
  rp({
        uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
        method: 'POST',
        formData: {
            secret: 'your_secret_key',
            response: req.body['g-recaptcha-response']
        },
        json: true
    }).then(result => {
        if (result.success) {
            sendEmail('recipient@gmail.com', req.body).then(()=> { 
              res.status(200).send(true);
            });
        }
        else {
            res.status(500).send("Recaptcha failed.")
        }
    }).catch(reason => {
        res.status(500).send("Recaptcha req failed.")
    })

});

// Send email function
function sendEmail(email, body) {
  const mailOptions = {
    from: `<noreply@domain.com>`,
    to: ${data.seller}
  };
  // hmtl message constructions
  mailOptions.subject = 'contact form message';
  mailOptions.html = `<p><b>Name: </b>${body.rsName}</p>
                      <p><b>Email: </b>${body.rsEmail}</p>
                      <p><b>Subject: </b>${body.rsSubject}</p>
                      <p><b>Message: </b>${body.rsMessage}</p>`;
  return mailTransport.sendMail(mailOptions);
}