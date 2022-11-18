import mail from '@sendgrid/mail';

export default function handler(request, response) {
	mail.setApiKey(process.env.PUBLIC_SENDGRID_API_KEY);
	const { email, firstname, lastname, subject, message } = request.query;
	const msg = {
		to: process.env.PUBLIC_RECEIVER_EMAIL,
		from: process.env.PUBLIC_SENDER_EMAIL,
		subject: 'New Submission from Astro',
		text: `Email: ${email}\FirstName: ${firstname}\LastName: ${lastname}\subject: ${subject}\n\n${message}`,
		html: `Email: ${email}<br/>First Name: ${firstname}<br/>Last Name: ${lastname}<br/>Subject: ${subject}<br/><br/>${message}`,
	};

	mail
		.send(msg)
		.then(() => {
			console.log('Email sent');
			response.status(200);
		})
		.catch((error) => {
			console.error(error);
		});
}
