import sendgrid from '@sendgrid/mail';
import { z } from 'zod';
import { env } from '../src/env/server.mjs';

sendgrid.setApiKey(env.SENDGRID_API_KEY);

const ResponseData = z.object({
	message: z.string(),
});
type ResponseData = z.infer<typeof ResponseData>;

async function sendEmail(req, res) {
	try {
		await sendgrid.send({
			to: 'contact@cdi.dev',
			from: 'contact@cdi.dev',
			subject: `[Lead from website] : ${req.body.subject}`,
			html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>Contact Form</title>
        <meta name="description" content="Contact Form - cdi.dev">
        <meta name="author" content="cdi.dev">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.firstName} ${req.body.lastName}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
      </body>
      </html>`,
		});
	} catch (err) {
		return res.status(500).json({ message: 'Error -  contact form API' });
	}

	return res.status(200).json({ message: '' });
}

export default sendEmail;
