export interface Quizzes {
  [key: string]: Quiz;
}

export interface Quiz {
  date: string;
  allowedUsers: {
    [key: string]: AllowedUser;
  };
}

interface AllowedUser {
  laps: {
    [key: number]: Lap;
  };
}

interface Lap {
  data: any;
}
