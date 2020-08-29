import { Request, Response } from 'express';
import { MailerService } from '../extensions';

export const mail = async (request: Request, response: Response) => {
  const mailerService = new MailerService();

  const result = mailerService.sendMail(
    request.body.to,
    request.body.subject,
    request.body.content,
  );
  response.send(result);
};
