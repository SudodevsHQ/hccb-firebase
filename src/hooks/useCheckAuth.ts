import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export interface AuthTypes {
  isValid: boolean;
  isLoading: boolean;
  error: string | null;
  employee_id: string | null;
  quizID: string | null;
}

const useCheckAuth = (): AuthTypes => {
  const location = useLocation();
  // quiz/0kaj9d5unNfWD2RvTMep/ayushsingh871@gmail.com

  const [employee_id, setId] = useState<string | null>(null);
  const [quizID, setQuizId] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const path = location.pathname;
    const paths = path.split('/');
    setId(paths[3]);
    setQuizId(paths[2]);
  }, [location.pathname]);

  useEffect(() => {
    // console.log(isValid);
  }, [isValid]);

  useEffect(() => {
    // console.log(employee_id, quizID);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BASE_URL}/quiz/check`,
          {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              employee_id,
              key: `quiz/${quizID}`,
            }),
          },
        );
        const json = await res.json();
        // console.log(json);
        if (json.data) {
          setIsValid(true);
        }
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    if (employee_id && quizID) {
      fetchData();
    }
  }, [employee_id, quizID]);

  return { isValid, isLoading, error, employee_id, quizID };
};

export default useCheckAuth;
