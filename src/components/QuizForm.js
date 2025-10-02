import React, { useState } from 'react';
import { quizService } from '../services/quizService';
import '../styles/Form.css';

const QuizForm = ({ onQuizCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    username: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const createdQuiz = await quizService.createQuiz(formData);
      onQuizCreated(createdQuiz);
      setFormData({ title: '', username: '' });
    } catch (err) {
      setError(err.toString());
    }
  };

  return (
    <div className="quiz-form">
      <h2>Create New Quiz</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            required
          />
        </div>
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
};

export default QuizForm;