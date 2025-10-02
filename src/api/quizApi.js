import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8081';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Create a new quiz
export const createQuiz = (quizData) => api.post('/quiz', quizData).then(res => res.data);

// Get all quizzes
export const getAllQuizzes = () => api.get('/quiz').then(res => res.data);

// Get quiz by username
export const getQuizByUsername = (username) => api.get(`/quiz/username/${username}`).then(res => res.data);

export default api;