// src/pages/HomePage.js

import React, { useState } from 'react';
import QuizForm from '../components/QuizForm';
import QuizList from '../components/QuizList';
import UserQuiz from '../components/UserQuiz';
import '../styles/App.css';

const HomePage = () => {
  const [view, setView] = useState('menu'); // views: 'menu', 'create', 'all', 'search'

  return (
    <div className="app-container">
      <h1>Quiz Management System</h1>

      {/* Main Menu */}
      {view === 'menu' && (
        <div className="menu">
          <button onClick={() => setView('create')}>Create New Quiz</button>
          <button onClick={() => setView('all')}>View All Quizzes</button>
          <button onClick={() => setView('search')}>Search Quiz by Username</button>
        </div>
      )}

      {/* Create Quiz View */}
      {view === 'create' && (
        <div className="view-section">
          <QuizForm onQuizCreated={() => setView('menu')} />
          <button className="back-button" onClick={() => setView('menu')}>
            Back to Menu
          </button>
        </div>
      )}

      {/* View All Quizzes */}
      {view === 'all' && (
        <div className="view-section">
          <QuizList />
          <button className="back-button" onClick={() => setView('menu')}>
            Back to Menu
          </button>
        </div>
      )}

      {/* Search by Username */}
      {view === 'search' && (
        <div className="view-section">
          <UserQuiz />
          <button className="back-button" onClick={() => setView('menu')}>
            Back to Menu
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
