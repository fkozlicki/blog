import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app: Express = express();
app.use(cors());
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

const myAddress = 'filip.kozlickii@gmail.com';
const myPassword = 'ceprelreiayfcbtx';

const mailer = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: myAddress,
		pass: myPassword,
	},
});

app.post('/contact', (req: Request, res: Response) => {
	console.log('BODY!!! ', req.body);
	mailer.sendMail(
		{
			sender: req.body.from,
			replyTo: req.body.from,
			from: req.body.from,
			to: [myAddress],
			subject: 'Email from sendmailer',
			text: `Hey, ${req.body.name} here!\n${req.body.message}`,
		},
		(err, info) => {
			if (err) {
				console.log('error', err.message);
				return res.status(500).send(err);
			}
			res.status(200).json({ success: true });
			console.log(info);
		}
	);
});

app.listen(3000, () => {
	console.log('Server is running');
});
