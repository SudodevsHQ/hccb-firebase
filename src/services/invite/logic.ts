import { AES, enc } from 'crypto-js';
import firebase from '../../config/firebaseConfig';
import { Quiz } from '../../../interfaces';

export function generateLinkText(email: string): string {
  const link = AES.encrypt(email, email);
  return link.toString();
}

export function decryptLinkText(url: string, email: string): string {
  const link = AES.decrypt(url, email);
  return link.toString(enc.Utf8);
}

export async function isInviteValid(
  quizId: string,
  email: string,
): Promise<boolean> {
  const db = firebase.firestore();
  const quiz = await db.collection('quizzes').doc(quizId).get();
  const quizData = quiz.data() as Quiz;
  if (email in quizData?.allowedUsers) {
    return true;
  }
  return false;
}
