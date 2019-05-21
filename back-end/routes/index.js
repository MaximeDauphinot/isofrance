var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)


transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var nom = req.body.nom
  var prenom = req.body.prenom
  var email = req.body.email
  var telephone = req.body.telephone
  var content = `${prenom} ${nom}, \n email: ${email} \n Numero de telephone: ${telephone}`

  var mail = {
    from: prenom + ' ' + nom,
    to: 'maksime-57@hotmail.fr',  //Change to email address that you want to receive messages on
    subject: 'Isolation à 1 euro',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
