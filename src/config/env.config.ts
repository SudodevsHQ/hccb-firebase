import * as dotEnv from 'dotenv';
dotEnv.config();

export const ENV = {
  MAIL_HOST: process.env.MAIL_HOST || 'imap.gmail.com',
  MAIL_PORT: process.env.MAIL_PORT || '465',
  MAIL_USERNAME: process.env.MAIL_USERNAME || 'username',
  MAIL_PASSWORD: process.env.MAIL_PASSWORD || 'password',
};
