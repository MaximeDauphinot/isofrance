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

router.get('/app2/', (req, res) => {
	console.log('dauph');
	res.send('ok');
});

router.post('/app2/send', (req, res, next) => {
  var nom = req.body.nom
  var prenom = req.body.prenom
  var email = req.body.email
  var telephone = req.body.telephone
  var type = req.body.type
  var nbrpersonne = req.body.nbrpersonne
  var revenu = req.body.revenu
  var surface = req.body.surface
  var situation = req.body.situation
  var habitation = req.body.habitation
  var energie = req.body.energie
  var annee = req.body.annee
  var adresse = req.body.adresse
  var ville = req.body.ville
  var content = `${prenom} ${nom}, \n email: ${email} \n Numero de telephone: ${telephone} \n
  adresse: ${adresse}, ${ville} \n nombre de personnes: ${nbrpersonne}\n revenu: ${revenu} \n type de surface a isoler: ${type} \n surface: ${surface} \n
  situation: ${situation} \n habitation: ${habitation} \n energie: ${energie} \n Année: ${annee}`
  var mail = {
    from: prenom + ' ' + nom,
    to: 'isofrance.ne.pas.repondre@gmail.com',  //Change to email address that you want to receive messages on
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
