import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const quizID = location.pathname.split('/')[2];

  const [employee_id, setEmployee_id] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!employee_id) setError('Please enter Employee id');
    else if (!password) setError('Please enter password');
    else if (password !== employee_id)
      setError('Please check that the employee_id and password are the same');
    else {
      setError('');
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/quiz/check`, {
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
      });
      const json = await res.json();
      if (json.data) history.push(`${employee_id}/module/${json.module}`);
      else setError('You are not authorized to access this quiz');
    }
  };

  return (
    <div>
      <label htmlFor="employee_id" className="form-label">
        Employee ID
      </label>
      <input
        type="text"
        className="form-control"
        id="employee_id"
        placeholder="Employee ID"
        onChange={(e) => setEmployee_id(e.target.value)}></input>
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}></input>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleSubmit}>
        Submit
      </button>
      {error}
    </div>
  );
};

export default LoginPage;
