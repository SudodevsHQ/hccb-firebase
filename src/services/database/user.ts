import firebase from '../../config/firebaseConfig';
import { User, Quiz } from '../../../interfaces';
import { generateLinkText } from '../invite';
export async function createUser(user: User) {
  const db = firebase.firestore();
  await db.doc(`users/${generateLinkText(user.email)}}`).set(user);
}

export async function updateUser(user: User) {
  const db = firebase.firestore();
  await db.doc(`users/${generateLinkText(user.email)}`).update(user);
}

export async function createQuiz(quiz: Quiz) {
  const db = firebase.firestore();
  await db.collection('quizzes').add(quiz);
}

export async function addUsersToQuiz(emails: string[], quizId: string) {
  const db = firebase.firestore();
  const data: { [key: string]: any } = {};
  emails.forEach((email) => {
    data[generateLinkText(email)] = {
      laps: {},
    };
  });
  await db.doc(`quizzes/${quizId}/`).collection('allowedUsers').add(data);
}

export async function addLapData(
  lapNumber: number,
  data: any,
  userId: string,
  quizId: string,
) {
  const db = firebase.firestore();
  await db
    .doc(`quizzes/${quizId}/allowedUsers/${userId}/${lapNumber}`)
    .set(data);
}
