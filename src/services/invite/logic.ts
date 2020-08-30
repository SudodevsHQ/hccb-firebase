import { AES, enc } from 'crypto-js';
// import { firebase } from '../../config/firebaseConfig';

export function generateLinkText(email: string): string {
  const link = AES.encrypt(email, email);
  return link.toString();
}

export function decryptLinkText(url: string, email: string): string {
  const link = AES.decrypt(url, email);
  return link.toString(enc.Utf8);
}

export function isInviteValid(quizId: string, email: string): string {
  return 'todo';
}
