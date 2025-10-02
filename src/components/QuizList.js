import React, { useState, useEffect } from 'react';
import { quizService } from '../services/quizService';
import '../styles/List.css';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await quizService.getAllQuizzes();
        setQuizzes(data);
      } catch (err) {
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

  if (loading) return <div className="loading">Loading quizzes...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="quiz-list">
      <h2>All Quizzes</h2>
      {quizzes.length > 0 ? (
        <ul>
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              <h3>{quiz.title}</h3>
              <p>By: {quiz.username}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No quizzes found</p>
      )}
    </div>
  );
};

export default QuizList;
