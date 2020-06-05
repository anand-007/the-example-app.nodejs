
const SENDGRID_API_KEY='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'



module.exports.sendEmail = async (request, response, next) => {
  console.log("I am gary bear");
  const sgMail = require('@sendgrid/mail');
	sgMail.setApiKey(SENDGRID_API_KEY);
	var email = request.body.email;
	console.log(request.body);
	var name = request.body.name;
	var subject = request.body.subject;
	var message = request.body.message;


	console.log()
	var msg = {
	  to: 'anand@codeisolutions.com',
	  from: 'test@example.com',
	  subject: subject ,
	  text: message,
	  html: '<strong>'+message+'</strong>',
	};
	sgMail.send(msg);

	response.render('email', {
    'success' : true
  })
}