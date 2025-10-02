// src/services/quizService.js

import { 
  createQuiz, 
  getAllQuizzes, 
  getQuizByUsername 
} from '../api/quizApi';

export const quizService = {
  createQuiz: async (quizData) => {
    try {
      return await createQuiz(quizData);
    } catch (error) {
      throw typeof error === 'string' ? error : 'Failed to create quiz';
    }
  },

  getAllQuizzes: async () => {
    try {
      const quizzes = await getAllQuizzes();
      return Array.isArray(quizzes) ? quizzes : [];
    } catch (error) {
      throw typeof error === 'string' ? error : 'Failed to fetch quizzes';
    }
  },

  getQuizByUsername: async (username) => {
    try {
      const quiz = await getQuizByUsername(username);
      return quiz || null;
    } catch (error) {
      throw typeof error === 'string' ? error : `Failed to fetch ${username}'s quiz`;
    }
  }
};
