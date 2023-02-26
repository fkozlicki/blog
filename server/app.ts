import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

const myAddress = process.env.GMAIL_USER;

const mailer = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_PASSWORD,
	},
});

app.get('/', (req: Request, res: Response) => {
	res.send('Blog server');
});

app.post('/contact', (req: Request, res: Response) => {
	const { from, name, message } = req.body;

	mailer.sendMail(
		{
			sender: from,
			replyTo: from,
			from: from,
			to: myAddress,
			subject: `Blog message from ${from}`,
			text: `Hey, ${name} here!\n${message}`,
		},
		(err, info) => {
			if (err) {
				return res.status(500).send(err);
			}
			res.status(200).json({ success: true });
		}
	);
});

app.listen(process.env.PORT || 3000, () => {
	console.log('Server is running');
});
