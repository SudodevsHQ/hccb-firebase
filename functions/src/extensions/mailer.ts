import * as nodemailer from 'nodemailer';
import * as functions from 'firebase-functions';
import SMTPTransport = require('nodemailer/lib/smtp-transport');

export class MailerService {
  private _transporter: nodemailer.Transporter;

  constructor() {
    const username: string = functions.config().mailer.username;
    const password: string = functions.config().mailer.password;
    this._transporter = nodemailer.createTransport(
      new SMTPTransport({
        service: 'Gmail',
        auth: {
          user: username,
          pass: password,
        },
      }),
    );
  }

  sendMail(to: string, subject: string, content: string): any {
    const username: string = functions.config().mailer.username;

    const options = {
      from: username,
      to: to,
      subject: subject,
      text: content,
    };
    const result: { error: any; info: any } = { error: null, info: null };

    this._transporter.sendMail(options, (error, info) => {
      if (error) {
        console.log(`error: ${error}`);
      }
      console.log(`Message Sent ${info.response}`);

      result.error = error;
      result.info = info;
    });

    return result;
  }
}
