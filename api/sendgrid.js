import mail from '@sendgrid/mail';

export default function handler(request, response) {
	mail.setApiKey(process.env.PUBLIC_SENDGRID_API_KEY);
	const { email, phone, message } = request.query;
	const msg = {
		to: process.env.PUBLIC_RECEIVER_EMAIL,
		from: process.env.PUBLIC_SENDER_EMAIL,
		subject: 'New Submission from Astro',
		text: `Email: ${email}\nPhone: ${phone}\n\n${message}`,
		html: `Email: ${email}<br/>Phone: ${phone}<br/><br/>${message}`,
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
