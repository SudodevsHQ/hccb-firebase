import { sendMail } from '../mail';

test('Mailer Test', () => {
  const mailOptions = {
    from: '"Example Team" <from@test.com>',
    to: 'anurag@sudodevs.com',
    subject: 'Nice Nodemailer test',
    text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
    html:
      '<b>Hey there! </b><br> This is our first message sent with Nodemailer',
  };
  sendMail(mailOptions);
});
