import React, { useState } from 'react';
import { quizService } from '../services/quizService';
import '../styles/List.css';

const UserQuiz = () => {
  const [username, setUsername] = useState('');
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!username.trim()) return;
    setLoading(true);
    setError('');
    try {
      const data = await quizService.getQuizByUsername(username);
      setQuiz(data);
    } catch (err) {
      setError(err.toString());
      setQuiz(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-quiz">
      <h2>Find Quiz by Username</h2>
      <div className="search-container">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      
      {quiz && (
        <div className="quiz-details">
          <h3>{quiz.title}</h3>
          <p>Created by: {quiz.username}</p>
        </div>
      )}
    </div>
  );
};

export default UserQuiz;