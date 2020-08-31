export interface Users {
  [userid: string]: User;
}

export interface User {
  name: string;
  email: string;
  quizzes: string[];
  password: string;
}
